export default class RigidBody {
    constructor(scene, options = {}) {
        this.lastRender = Date.now()
        this.scene = scene
        this.x = options.x || 0
        this.y = options.y || 0
        this.bearing = typeof options.bearing === 'number' ? options.bearing : Math.PI
        this.speed = options.speed || 0
    }

    setBearing(deg) {
        this.bearing = deg * (Math.PI / 180)
    }

    setSpeed(speed) {
        this.speed = speed
    }

    render() {
        const now = Date.now()
        const frameDeltaMs = now - this.lastRender
        this.lastRender = now

        const distanceDelta = (this.speed * frameDeltaMs) / 1000
        this.x = this.x + (Math.sin(this.bearing) * distanceDelta)
        this.y = this.y - (Math.cos(this.bearing) * distanceDelta)

        if (!(this.node instanceof Node)) return

        const bounds = this.scene.getBoundingClientRect()
        const nodeRect = this.node.getBoundingClientRect()
        const inBounds = this.x < bounds.width + nodeRect.width &&
                        this.y < bounds.height + nodeRect.height &&
                        this.x + nodeRect.width > 0 &&
                        this.y + nodeRect.height > 0

        if (!inBounds) return

        this.node.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
