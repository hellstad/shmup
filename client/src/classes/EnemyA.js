import RigidBody from './RigidBody'

export default class EnemyA extends RigidBody {
    constructor(scene, options) {
        super(scene, options)

        const node = document.createElement('div')
        node.className = '__enemy_a__'
        node.style.zIndex = '90'
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
    }
}
