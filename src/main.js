import './style.css'
import * as THREE from 'tree'

const scene = new THREE.scene()

const camara = new pespectiveCamara(75, window.innerWidth / innerHeight, 0.1, 1000)
scene.add(camara)