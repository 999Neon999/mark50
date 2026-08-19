// X-Ray Occlusion Visualizer Component
AFRAME.registerComponent('xray-occlusion', {
  init: function () {
    let el = this.el;

    // Create a translucent, glowing box to simulate seeing into a cabinet
    el.setAttribute('geometry', 'primitive: box');
    el.setAttribute('material', 'color: #00ffff; transparent: true; opacity: 0.3; wireframe: true');
    el.setAttribute('scale', '0.5 0.5 0.5');

    // Add a glowing core to represent items inside
    let core = document.createElement('a-entity');
    core.setAttribute('geometry', 'primitive: sphere; radius: 0.2');
    core.setAttribute('material', 'color: #00ffff; emissive: #00ffff; emissiveIntensity: 0.8');
    core.setAttribute('animation', 'property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000');
    
    // Add text label
    let text = document.createElement('a-text');
    this.textEl = text; // Save reference
    text.setAttribute('value', 'Active Items\nInside');
    text.setAttribute('color', '#00ffff');
    text.setAttribute('align', 'center');
    text.setAttribute('position', '0 0.8 0');
    text.setAttribute('look-at', '[camera]');

    el.appendChild(core);
    el.appendChild(text);
  },

  tick: function () {
    let cameraEl = document.querySelector('a-camera');
    if (!cameraEl || !this.textEl) return;

    let cameraPos = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(cameraPos);
    
    let elPos = new THREE.Vector3();
    this.el.object3D.getWorldPosition(elPos);

    let distance = cameraPos.distanceTo(elPos);
    let scaleFactor = Math.max(1, Math.min(distance * 0.8, 3));
    this.textEl.setAttribute('scale', `${scaleFactor} ${scaleFactor} ${scaleFactor}`);
  }
});
