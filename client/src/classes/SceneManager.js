export default class SceneManager {
    constructor(node) {
        this.node = node
        this.objects = []
    }

    render() {
        this.objects.forEach(obj => obj.render())
    }
}
