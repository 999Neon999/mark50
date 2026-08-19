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
    text.setAttribute('value', 'Active Items\nInside');
    text.setAttribute('color', '#00ffff');
    text.setAttribute('align', 'center');
    text.setAttribute('position', '0 0.8 0');
    text.setAttribute('look-at', '[camera]');

    el.appendChild(core);
    el.appendChild(text);
  }
});
