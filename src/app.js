import './components/spatial-status-checker.js';

// We also need look-at component for text to face the camera
// Importing it directly from unpkg or defining a simple version
AFRAME.registerComponent('look-at', {
  schema: { type: 'selector' },
  
  init: function () {
    this.target3D = null;
  },

  update: function () {
    let targetEl = this.data;
    if (!targetEl) return;
    this.target3D = targetEl.object3D;
  },

  tick: function () {
    if (this.target3D) {
      // Make the entity look at the target (camera)
      this.el.object3D.lookAt(this.target3D.position);
    }
  }
});

console.log('Project Identity - Meta Quest 3S WebXR Prototype Initialized');
