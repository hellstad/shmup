import RigidBody from '../RigidBody'

const template = `
<div class="__player__">
  <div class="scene">
    <div class="shape prism-1 pri-1">
      <div class="face ft">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.223529);"></div>
      </div>
      <div class="face bk">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face-wrapper rt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face-wrapper lt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face bm">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
    </div>
    <div class="shape cuboid-1 cub-1">
      <div class="face ft">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face bk">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face rt">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face lt">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face bm">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face tp">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
    </div>
    <div class="shape prism-2 pri-2">
      <div class="face ft">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.152941);"></div>
      </div>
      <div class="face bk">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face-wrapper rt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face-wrapper lt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face bm">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
    </div>
    <div class="shape prism-3 pri-3">
      <div class="face ft">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.152941);"></div>
      </div>
      <div class="face bk">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
      <div class="face-wrapper rt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face-wrapper lt">
        <div class="face">
          <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
        </div>
      </div>
      <div class="face bm">
        <div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.282353);"></div>
      </div>
    </div>
  </div>
</div>
`

const style = `
.__player__ {
  perspective: 1000px;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 100%;
}
.face {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
}
.scene, .shape, .face, .face-wrapper, .cr {
  position: absolute;
  transform-style: preserve-3d;
}
.scene {
  width: 80em;
  height: 80em;
  top: 50%;
  left: 50%;
  margin: -40em 0 0 -40em;
  transition: transform 150ms linear;
}
.shape {
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 50%;
}
.face, .face-wrapper {
  overflow: hidden;
  transform-origin: 0 0;
  backface-visibility: hidden;
  /* hidden by default, prevent blinking and other weird rendering glitchs */
}
.face {
  background-size: 100% 100%!important;
  background-position: center;
}
.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%
}
.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}
.side {
  left: 50%;
}
.cr, .cr .side {
  height: 100%;
}
[class*="prism"] .ft, [class*="prism"] .bk {
  width: 100%;
  height: 100%;
}
[class*="prism"] .bk {
  left: 100%;
}
[class*="prism"] .rt {
  transform: rotateY(-90deg) translateX(-50%);
}
[class*="prism"] .lt {
  transform: rotateY(90deg) translateX(-50%);
}
[class*="prism"] .bm {
  transform: rotateX(-90deg) translateY(-50%);
}
[class*="prism"] .lt {
  left: 100%;
}
[class*="prism"] .bm {
  top: 100%;
}
[class*="prism"] .rt .face {
  left: -100%;
  transform-origin: 100% 0;
}
[class*="cuboid"] .ft, [class*="cuboid"] .bk {
  width: 100%;
  height: 100%;
}
[class*="cuboid"] .bk {
  left: 100%;
}
[class*="cuboid"] .rt {
  transform: rotateY(-90deg) translateX(-50%);
}
[class*="cuboid"] .lt {
  transform: rotateY(90deg) translateX(-50%);
}
[class*="cuboid"] .tp {
  transform: rotateX(90deg) translateY(-50%);
}
[class*="cuboid"] .bm {
  transform: rotateX(-90deg) translateY(-50%);
}
[class*="cuboid"] .lt {
  left: 100%;
}
[class*="cuboid"] .bm {
  top: 100%;
}
/* .pri-1 styles */
.pri-1 {
  transform:translate3D(-5em, -1.5em, 0em) rotateX(-630deg) rotateY(-360deg) rotateZ(270deg);
  opacity:1;
  width:6em;
  height:10em;
  margin:-5em 0 0 -3em;
}
.pri-1 .rt .face {
  transform:rotateZ(-16.69924423399364deg);
}
.pri-1 .lt .face {
  transform:rotateZ(16.69924423399364deg);
}
.pri-1 .ft {
  height:10.44030650891055em;
  transform:translateZ(-1.5em) rotateX(16.69924423399364deg);
}
.pri-1 .bk {
  transform:translateZ(-1.5em) rotateY(180deg);
}
.pri-1 .rt, .pri-1 .lt {
  width:3em;
  height:10em;
}
.pri-1 .rt .face, .pri-1 .lt .face {
  height:10.44030650891055em;
}
.pri-1 .bm {
  width:6em;
  height:3em;
}
.pri-1 .face {
  background-color:#d3d2d4;
}
/* .cub-1 styles */
.cub-1 {
  transform:translate3D(5.25em, -1.5em, 0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  opacity:1;
  width:10.5em;
  height:3em;
  margin:-1.5em 0 0 -5.25em;
}
.cub-1 .ft {
  transform:translateZ(3em);
}
.cub-1 .bk {
  transform:translateZ(-3em) rotateY(180deg);
}
.cub-1 .rt, .cub-1 .lt {
  width:6em;
  height:3em;
}
.cub-1 .tp, .cub-1 .bm {
  width:10.5em;
  height:6em;
}
.cub-1 .face {
  background-color:#d3d2d4;
}
/* .pri-2 styles */
.pri-2 {
  transform:translate3D(6.5em, -1.5em, 6.5em) rotateX(0deg) rotateY(0deg) rotateZ(-90deg);
  opacity:1;
  width:1em;
  height:8em;
  margin:-4em 0 0 -0.5em;
}
.pri-2 .rt .face {
  transform:rotateZ(-41.18592516570965deg);
}
.pri-2 .lt .face {
  transform:rotateZ(41.18592516570965deg);
}
.pri-2 .ft {
  height:10.63014581273465em;
  transform:translateZ(-3.5em) rotateX(41.18592516570965deg);
}
.pri-2 .bk {
  transform:translateZ(-3.5em) rotateY(180deg);
}
.pri-2 .rt, .pri-2 .lt {
  width:7em;
  height:8em;
}
.pri-2 .rt .face, .pri-2 .lt .face {
  height:10.63014581273465em;
}
.pri-2 .bm {
  width:1em;
  height:7em;
}
.pri-2 .face {
  background-color:#d3d2d4;
}
/* .pri-3 styles */
.pri-3 {
  transform:translate3D(6.5em, -1.5em, -6.5em) rotateX(-180deg) rotateY(0deg) rotateZ(-90deg);
  opacity:1;
  width:1em;
  height:8em;
  margin:-4em 0 0 -0.5em;
}
.pri-3 .rt .face {
  transform:rotateZ(-41.18592516570965deg);
}
.pri-3 .lt .face {
  transform:rotateZ(41.18592516570965deg);
}
.pri-3 .ft {
  height:10.63014581273465em;
  transform:translateZ(-3.5em) rotateX(41.18592516570965deg);
}
.pri-3 .bk {
  transform:translateZ(-3.5em) rotateY(180deg);
}
.pri-3 .rt, .pri-3 .lt {
  width:7em;
  height:8em;
}
.pri-3 .rt .face, .pri-3 .lt .face {
  height:10.63014581273465em;
}
.pri-3 .bm {
  width:1em;
  height:7em;
}
.pri-3 .face {
  background-color:#d3d2d4;
}
`

const DEFAULT_TRANSFORM = 'scale(0.5) rotateX(270deg) rotateY(270deg) rotateZ(-35deg)'

export default class Player extends RigidBody {
    constructor(scene, options = {}) {
        super(scene, options)

        // Setup DOM stuff
        const styleNode = document.createElement('style')
        styleNode.textContent = style
        document.head.appendChild(styleNode)

        const node = document.createElement('div')
        node.innerHTML = template
        node.style.height = '250px'
        node.style.width = '250px'
        node.querySelector('.scene').style.transform = DEFAULT_TRANSFORM
        scene.appendChild(node)
        this.node = node

        // Init position
        const sceneBounds = this.scene.getBoundingClientRect()
        const nodeBounds = this.node.getBoundingClientRect()
        this.x = (sceneBounds.width / 2) - (nodeBounds.width / 2)
        this.y = sceneBounds.height - nodeBounds.height
    }

    setVelocity(bearing, speed) {
        this.setSpeed(speed)
        this.setBearing(bearing)
        const vBearing = bearing % 360
        let roll = 0
        if (vBearing > 180) {
            roll = 0 - (360 - ((vBearing / 2) + 180))
        } else if (vBearing < 180) {
            roll = vBearing / 2
        }
        let pitch = 0
        if (vBearing > 90 && vBearing < 270) {
            pitch = 15
        } else if ((vBearing < 90 || vBearing > 270) && speed !== 0) {
            pitch = -10
        }
        this.node
            .querySelector('.scene')
            .style
            .transform = `${DEFAULT_TRANSFORM} rotateZ(${pitch}deg) rotateX(${roll}deg)`
    }

    // @Override
    render() {
        const now = Date.now()
        const frameDeltaMs = now - this.lastRender
        this.lastRender = now

        const distanceDelta = (this.speed * frameDeltaMs) / 1000
        const prevX = this.x
        const prevY = this.y
        this.x = this.x + (Math.sin(this.bearing) * distanceDelta)
        this.y = this.y - (Math.cos(this.bearing) * distanceDelta)

        if (!(this.node instanceof Node)) return

        const bounds = this.scene.getBoundingClientRect()
        const nodeRect = this.node.getBoundingClientRect()
        const inBounds = this.x + nodeRect.width <= bounds.width &&
                        this.y + nodeRect.height <= bounds.height &&
                        this.x >= 0 &&
                        this.y >= 0

        if (!inBounds) {
            this.x = prevX
            this.y = prevY
            return
        }

        this.node.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
