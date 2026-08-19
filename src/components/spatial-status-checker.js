// FrameVR / WebXR Expiry & Hazard Logic
AFRAME.registerComponent('spatial-status-checker', {
  schema: {
    expiryDays: { type: 'number', default: 5 },
    isAllergen: { type: 'boolean', default: false },
    assignedUser: { type: 'string', default: 'John' }
  },

  init: function () {
    let el = this.el;
    let data = this.data;

    // We can add simple UI text above the object
    let textEl = document.createElement('a-text');
    textEl.setAttribute('position', '0 1 0');
    textEl.setAttribute('align', 'center');
    textEl.setAttribute('scale', '1 1 1');
    // Ensure it always faces the camera
    textEl.setAttribute('look-at', '[camera]');

    // Check Allergen Condition
    if (data.isAllergen) {
      // Instead of an external glb model for now, we'll use a primitive
      // to act as a 3D Hazard Shield to ensure it works without external assets
      el.setAttribute('geometry', 'primitive: octahedron');
      el.setAttribute('material', 'color: #FF0000; wireframe: true');
      el.setAttribute('scale', '0.4 0.4 0.4');
      
      textEl.setAttribute('value', `HAZARD\nDO NOT CONSUME\n(${data.assignedUser})`);
      textEl.setAttribute('color', '#FF0000');
      
      console.log(`ALERT: Allergen Shield Active for ${data.assignedUser}!`);
    } else {
      // Check Freshness Condition
      let statusText = `Expires in\n${data.expiryDays} days`;
      if (data.expiryDays <= 0) {
        el.setAttribute('material', 'color: #FF2D00'); // Pulsing Red
        statusText = 'EXPIRED';
        textEl.setAttribute('color', '#FF2D00');
      } else if (data.expiryDays <= 2) {
        el.setAttribute('material', 'color: #FFC300'); // Warning Yellow
        textEl.setAttribute('color', '#FFC300');
      } else {
        el.setAttribute('material', 'color: #2ECC71'); // Safe Green
        textEl.setAttribute('color', '#2ECC71');
      }
      textEl.setAttribute('value', statusText);
    }
    
    el.appendChild(textEl);
  }
});
