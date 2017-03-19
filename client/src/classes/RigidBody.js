import uuid from 'uuid'

const DEFAULT_TRANSFORM = 'translate(-50%, -50%)'

export default class RigidBody {
    constructor(scene, options = {}) {
        this._id = uuid.v4()
        this.scene = scene
        this.x = options.x || 0
        this.y = options.y || 0
        this.bearing = typeof options.bearing === 'number' ? options.bearing : Math.PI
        this.speed = options.speed || 0

        // Add to scene
        this.scene.objects.push(this)
    }

    setBearing(deg) {
        this.bearing = deg * (Math.PI / 180)
    }

    setSpeed(speed) {
        this.speed = speed
    }

    setVelocity(bearing, speed) {
        this.setSpeed(speed)
        this.setBearing(bearing)
    }

    render() {
        const now = Date.now()
        const frameDeltaMs = now - (this.lastRender || now)
        this.lastRender = now

        const distanceDelta = (this.speed * frameDeltaMs) / 1000
        const prevX = this.x
        const prevY = this.y
        this.x = this.x + (Math.sin(this.bearing) * distanceDelta)
        this.y = this.y - (Math.cos(this.bearing) * distanceDelta)

        if (!(this.node instanceof Node)) return

        const bounds = this.scene.node.getBoundingClientRect()
        const nodeRect = this.node.getBoundingClientRect()
        const inBounds = nodeRect.left < bounds.width + nodeRect.width &&
                        nodeRect.top < bounds.height + nodeRect.height &&
                        nodeRect.left + nodeRect.width > 0 &&
                        nodeRect.top + nodeRect.height > 0

        if (!inBounds) {
            this.x = prevX
            this.y = prevY
            this.scene.objects = this.scene.objects.filter(o => {
                if (o._id === this._id) {
                    o.node.remove()
                    return false
                }

                return true
            })
            return
        }

        this.node.style.transform = `${DEFAULT_TRANSFORM} translate(${this.x}px, ${this.y}px)`
    }
}
