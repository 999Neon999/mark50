// Photo-Based Identity Badge Component
AFRAME.registerComponent('photo-badge', {
  schema: {
    ownerName: { type: 'string', default: 'Alex' }
  },

  init: function () {
    let el = this.el;
    let data = this.data;

    // Create a circular plane for the avatar
    el.setAttribute('geometry', 'primitive: circle; radius: 0.3');
    // We use a solid color or a placeholder image URL for the avatar
    el.setAttribute('material', 'color: #3498db; side: double');
    
    // Add a thick border to make it look like a badge
    let border = document.createElement('a-ring');
    border.setAttribute('radius-inner', '0.3');
    border.setAttribute('radius-outer', '0.35');
    border.setAttribute('color', '#ffffff');
    border.setAttribute('position', '0 0 0.01');
    
    // Add the name tag below the photo
    let nameTag = document.createElement('a-text');
    this.nameTag = nameTag; // Save reference
    nameTag.setAttribute('value', data.ownerName);
    nameTag.setAttribute('color', '#ffffff');
    nameTag.setAttribute('align', 'center');
    nameTag.setAttribute('position', '0 -0.5 0');
    
    // Make the entire badge always face the user
    el.setAttribute('look-at', '[camera]');

    el.appendChild(border);
    el.appendChild(nameTag);
  },

  tick: function () {
    let cameraEl = document.querySelector('a-camera');
    if (!cameraEl || !this.nameTag) return;

    let cameraPos = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(cameraPos);
    
    let elPos = new THREE.Vector3();
    this.el.object3D.getWorldPosition(elPos);

    let distance = cameraPos.distanceTo(elPos);
    let scaleFactor = Math.max(1, Math.min(distance * 0.8, 3));
    this.nameTag.setAttribute('scale', `${scaleFactor} ${scaleFactor} ${scaleFactor}`);
  }
});
