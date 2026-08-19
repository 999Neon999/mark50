import './components/spatial-status-checker.js';
import './components/xray-occlusion.js';
import './components/photo-badge.js';
import './components/memory-pointer.js';

// Look-at component for text to face the camera
AFRAME.registerComponent('look-at', {
  schema: { type: 'selector' },
  init: function () { this.target3D = null; },
  update: function () {
    let targetEl = this.data;
    if (!targetEl) return;
    this.target3D = targetEl.object3D;
  },
  tick: function () {
    if (this.target3D) {
      this.el.object3D.lookAt(this.target3D.position);
    }
  }
});

// UI Logic
let currentTool = 'xray';

document.addEventListener('DOMContentLoaded', () => {
  const btnAssist = document.getElementById('btn-assist');
  const btnProd = document.getElementById('btn-prod');
  const assistTools = document.getElementById('assist-tools');
  const prodTools = document.getElementById('prod-tools');
  const toolButtons = document.querySelectorAll('.tool-group button');
  const instructions = document.getElementById('instructions');
  const btnClear = document.getElementById('btn-clear');

  btnClear.addEventListener('click', () => {
    localStorage.removeItem('project-identity-anchors');
    // Remove all spawned entities
    document.querySelectorAll('.spawned-item').forEach(el => el.parentNode.removeChild(el));
    console.log("Room cleared!");
  });

  // Mode Switching
  btnAssist.addEventListener('click', () => {
    btnAssist.classList.add('active');
    btnProd.classList.remove('active');
    assistTools.classList.remove('hidden');
    prodTools.classList.add('hidden');
  });

  btnProd.addEventListener('click', () => {
    btnProd.classList.add('active');
    btnAssist.classList.remove('active');
    prodTools.classList.remove('hidden');
    assistTools.classList.add('hidden');
  });

  // Tool Selection
  toolButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Deselect all
      toolButtons.forEach(b => b.classList.remove('selected'));
      // Select clicked
      e.target.classList.add('selected');
      currentTool = e.target.dataset.item;
      
      // Show instruction
      instructions.style.display = 'block';
      setTimeout(() => instructions.style.display = 'none', 2000);
    });
  });

  // Select first tool by default
  if(toolButtons.length > 0) toolButtons[0].click();
});

// Tap to place logic using WebXR hit test
AFRAME.registerComponent('tap-to-place', {
  init: function () {
    this.el.sceneEl.addEventListener('enter-vr', () => {
      if (this.el.sceneEl.is('ar-mode')) {
        let scene = this.el.sceneEl;
        
        // Add hit-test component to the scene
        if (!scene.hasAttribute('ar-hit-test')) {
          scene.setAttribute('ar-hit-test', 'target: #placement-manager;');
        }
        
        // Restore saved items
        this.restoreItems();

        // Listen for screen taps
        scene.addEventListener('select', (e) => {
          this.spawnItem();
        });
      }
    });
  },

  restoreItems: function() {
    let saved = localStorage.getItem('project-identity-anchors');
    if (saved) {
      let items = JSON.parse(saved);
      items.forEach(item => {
        this.createEntity(item.tool, new THREE.Vector3(item.x, item.y, item.z), false);
      });
      console.log(`Restored ${items.length} items`);
    }
  },

  createEntity: function(toolType, posVector, saveToStorage = true) {
    let newEl = document.createElement('a-entity');
    newEl.setAttribute('position', `${posVector.x} ${posVector.y} ${posVector.z}`);
    newEl.classList.add('spawned-item');

    switch(toolType) {
      case 'xray':
        newEl.setAttribute('xray-occlusion', '');
        break;
      case 'allergen':
        newEl.setAttribute('spatial-status-checker', 'isAllergen: true; assignedUser: "Alex"');
        break;
      case 'badge':
        newEl.setAttribute('photo-badge', 'ownerName: Alex');
        break;
      case 'freshness':
        newEl.setAttribute('spatial-status-checker', 'expiryDays: 2');
        break;
      case 'fridge-index':
        newEl.setAttribute('spatial-status-checker', 'expiryDays: 10; assignedUser: "Shared"');
        break;
      case 'pointer':
        newEl.setAttribute('memory-pointer', 'itemName: "Keys"');
        break;
    }

    this.el.sceneEl.appendChild(newEl);

    if (saveToStorage) {
      let saved = localStorage.getItem('project-identity-anchors');
      let items = saved ? JSON.parse(saved) : [];
      items.push({ tool: toolType, x: posVector.x, y: posVector.y, z: posVector.z });
      localStorage.setItem('project-identity-anchors', JSON.stringify(items));
    }
  },

  spawnItem: function() {
    // In a real app, we'd use the hit-test intersection point.
    // For this prototype, we'll spawn the item 1.5 meters in front of the camera
    let cameraEl = document.querySelector('a-camera');
    let worldPos = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(worldPos);
    let worldDir = new THREE.Vector3();
    cameraEl.object3D.getWorldDirection(worldDir);
    
    // Spawn position = camera pos + (camera dir * distance)
    let distance = 1.5;
    let spawnPos = worldPos.add(worldDir.multiplyScalar(distance));
    
    this.createEntity(currentTool, spawnPos, true);
  }
});

// Attach tap-to-place to the scene
document.querySelector('a-scene').setAttribute('tap-to-place', '');
console.log('Project Identity - Meta Quest 3S WebXR Prototype Initialized');
