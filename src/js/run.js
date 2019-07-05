import { scene, camera, stats, renderer, sceneSettings, updateHelpers, clock } from './scene'
import { updateGuiInfo } from './gui'

export var FRAME_COUNT = 0

function update() {
  updateHelpers()

  if (!sceneSettings.pause) {
    var deltaTime = clock.getDelta()
    neuralNet.update(deltaTime)
    updateGuiInfo()
  }
}

// ----  draw loop
export default function run() {
  requestAnimationFrame(run)
  renderer.setClearColor(sceneSettings.bgColor, 1)
  renderer.clear()
  update()
  renderer.render(scene, camera)
  stats.update()
  FRAME_COUNT++
}
