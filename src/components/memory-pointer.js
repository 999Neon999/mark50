// Spatial Memory Pointer Component
AFRAME.registerComponent('memory-pointer', {
  schema: {
    itemName: { type: 'string', default: 'Keys' }
  },

  init: function () {
    let el = this.el;
    let data = this.data;

    // Create an arrow pointing down
    el.setAttribute('geometry', 'primitive: cone; radiusBottom: 0.2; radiusTop: 0; height: 0.5');
    el.setAttribute('material', 'color: #f1c40f; emissive: #f1c40f; emissiveIntensity: 0.5');
    
    // Animate the arrow bobbing up and down
    el.setAttribute('animation', 'property: position; dir: alternate; dur: 800; easing: easeInOutSine; loop: true; to: 0 0.2 0');

    // Add a pulsing ring at the base
    let base = document.createElement('a-ring');
    base.setAttribute('radius-inner', '0.3');
    base.setAttribute('radius-outer', '0.4');
    base.setAttribute('color', '#f1c40f');
    base.setAttribute('position', '0 -0.5 0');
    base.setAttribute('rotation', '-90 0 0');
    base.setAttribute('animation', 'property: scale; to: 1.5 1.5 1.5; dir: alternate; loop: true; dur: 800');
    
    // Add text label
    let text = document.createElement('a-text');
    this.textEl = text; // Save reference
    text.setAttribute('value', data.itemName);
    text.setAttribute('color', '#f1c40f');
    text.setAttribute('align', 'center');
    text.setAttribute('position', '0 0.8 0');
    text.setAttribute('look-at', '[camera]');

    el.appendChild(base);
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
