import RigidBody from './RigidBody'
import Player from './Player'
import PlayerMissile from './PlayerMissile'

const STATE_INITIAL = 0
const STATE_HOVERING = 1
const STATE_ACCELERATING = 2

export default class EnemyA extends RigidBody {
    constructor(scene, options) {
        super(scene, options)

        const node = document.createElement('div')
        node.className = '__enemy_a__'
        node.style.zIndex = '50'
        node.style.position = 'absolute'
        node.style.top = '0px'
        node.style.left = '0px'
        node.style.height = '50px'
        node.style.width = '50px'
        node.style.backgroundColor = 'blue'
        node.style.border = '5px solid blue'
        node.style.borderRadius = '20px'
        node.style.transition = 'transform'
        scene.node.appendChild(node)

        this.node = node

        const sceneBounds = scene.node.getBoundingClientRect()
        const nodeBounds = this.node.getBoundingClientRect()
        this.x = Math.random() * (sceneBounds.width - (nodeBounds.width * 2))

        this.setVelocity(180, 100)
        this.state = STATE_INITIAL
    }

    postrender() {
        const now = Date.now()
        this.lastStateChange = this.lastStateChange || now
        if (this.state === STATE_INITIAL &&
            now - this.lastStateChange > 2000) {
            this.setVelocity(180, 200)
            this.state = STATE_HOVERING
            this.lastStateChange = now
        } else if (this.state === STATE_HOVERING &&
            now - this.lastStateChange > 4000) {
            this.setVelocity(180, 1500)
            this.state = STATE_ACCELERATING
            this.lastStateChange = now
        }

        const nodeBounds = this.node.getBoundingClientRect()
        for (let i = 0; i < this.scene.objects.length; i++) {
            const objectBounds = this.scene.objects[i].node.getBoundingClientRect()
            if (nodeBounds.left < objectBounds.left + objectBounds.width &&
                nodeBounds.left + nodeBounds.width > objectBounds.left &&
                nodeBounds.top < objectBounds.top + objectBounds.height &&
                nodeBounds.height + nodeBounds.top > objectBounds.top) {
                if (this.scene.objects[i] instanceof PlayerMissile) {
                    this.die()
                    this.scene.objects[i].die()
                    break
                } else if (this.scene.objects[i] instanceof Player) {
                    this.die()
                    break
                }
            }
        }
    }
}
