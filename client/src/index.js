import './styles/index.scss'
import './index.html'

import SceneManager from './classes/SceneManager'
import Player from './classes/Player'
import EnemyA from './classes/EnemyA'

document.addEventListener('DOMContentLoaded', () => {
    const sceneNode = document.getElementById('root')
    const sceneManager = new SceneManager(sceneNode)

    const PLAYER_MOVEMENT_SPEED = 500
    const player = new Player(sceneManager, {
        x: 0,
        y: 0,
        speed: 0
    })

    const controlState = {
        up: false,
        down: false,
        left: false,
        right: false
    }

    function updatePlayerVelocity() {
        if (controlState.up && controlState.left) {
            player.setVelocity(315, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.up && controlState.right) {
            player.setVelocity(45, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.down && controlState.left) {
            player.setVelocity(225, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.down && controlState.right) {
            player.setVelocity(135, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.up) {
            player.setVelocity(0, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.right) {
            player.setVelocity(90, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.down) {
            player.setVelocity(180, PLAYER_MOVEMENT_SPEED)
        } else if (controlState.left) {
            player.setVelocity(270, PLAYER_MOVEMENT_SPEED)
        } else {
            player.setVelocity(0, 0)
        }
    }

    document.addEventListener('keydown', event => {
        event.preventDefault()

        const key = event.code
        switch (key) {
            case 'ArrowUp':
            case 'KeyW':
                controlState.up = true
                break
            case 'ArrowRight':
            case 'KeyD':
                controlState.right = true
                break
            case 'ArrowDown':
            case 'KeyS':
                controlState.down = true
                break
            case 'ArrowLeft':
            case 'KeyA':
                controlState.left = true
                break
            default:
        }

        updatePlayerVelocity()
    })

    document.addEventListener('keyup', event => {
        event.preventDefault()

        const key = event.code
        switch (key) {
            case 'ArrowUp':
            case 'KeyW':
                controlState.up = false
                break
            case 'ArrowRight':
            case 'KeyD':
                controlState.right = false
                break
            case 'ArrowDown':
            case 'KeyS':
                controlState.down = false
                break
            case 'ArrowLeft':
            case 'KeyA':
                controlState.left = false
                break
            case 'Space':
                player.fireMissile()
                break
            default:
        }

        updatePlayerVelocity()
    })

    let lastEnemyRender = Date.now()
    function step() {
        const now = Date.now()

        if (now - lastEnemyRender > 3500) {
            lastEnemyRender = now
            const enemy = new EnemyA(sceneManager)
        }

        sceneManager.render()
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
})
