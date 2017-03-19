import RigidBody from './RigidBody'

export default class Missile extends RigidBody {
    constructor(scene, options = {}) {
        super(scene, options)

        const node = document.createElement('div')
        node.className = '__missile__'
        node.style.zIndex = '100'
        node.style.position = 'absolute'
        node.style.height = '20px'
        node.style.width = '20px'
        node.style.backgroundColor = 'orange'
        node.style.border = '5px solid red'
        node.style.borderRadius = '20px'
        node.style.transition = 'transform'
        scene.node.appendChild(node)

        this.node = node
    }
}
