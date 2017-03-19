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
        this.hitRadius = 25

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
            const obj = this.scene.objects[i]
            const objectBounds = obj.node.getBoundingClientRect()
            const dx = (nodeBounds.left + (nodeBounds.width / 2)) - (objectBounds.left + (objectBounds.width / 2))
            const dy = (nodeBounds.top + (nodeBounds.height / 2)) - (objectBounds.top + (objectBounds.height / 2))
            const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            if (distance < this.hitRadius + obj.hitRadius) {
                if (obj instanceof PlayerMissile) {
                    this.die()
                    obj.die()
                    break
                } else if (obj instanceof Player) {
                    this.die()
                    break
                }
            }
        }
    }
}
