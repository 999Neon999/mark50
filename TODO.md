# Project Identity - Current Features & TODOs

## 🌟 Current Features Implemented

The current WebXR prototype includes the following fully functioning features:

### 1. Universal Interaction & UI
* **Cross-Device Support**: Works on desktop (testing), Meta Quest 3S (passthrough VR), and mobile phones (Magic Window/ARCore).
* **DOM Overlay UI**: A responsive, 2D HTML/CSS interface that floats over the AR environment, allowing for mode toggling and tool selection without needing VR controllers.
* **Tap-to-Place Logic**: Uses WebXR hit-testing (or fixed distance spawning) to let users place digital tags directly into their physical space by tapping the screen.

### 2. 🧠 Assist Mode
Designed for accessibility and cognitive assistance:
* **X-Ray Cabinet**: Spawns a translucent, glowing box to simulate looking inside a closed cabinet to locate items.
* **Allergen Hazard Shield**: Places a red, pulsing warning shield over items with a "DO NOT CONSUME" warning based on user profiles.
* **Photo-Based Identity Badges**: Places a floating digital avatar frame indicating who a specific item (e.g., medication) belongs to.

### 3. ⚡ Productivity Mode
Designed for household organization and waste reduction:
* **Freshness Tracker**: Displays a color-coded status text (Green = Safe, Yellow = Warning, Red = Expired) depending on the simulated expiration date.
* **Shared Fridge Index**: Drops green ownership tags to indicate if food is reserved or free to share.
* **Spatial Memory Pointer**: Spawns an animated, bouncing yellow arrow pointing down at a location, used for remembering where essential items (like keys) were placed.

---

## 📝 TODOs & Future Roadmap

* [ ] **Replace Primitives with Custom 3D Models**: Swap the basic A-Frame geometry (boxes, cones, spheres) with custom `.glb` assets (`hazard_shield.glb`, `freshness_ring.glb`, `avatar_badge.glb`).
* [ ] **Dynamic UI Distance Scaling**: Implement logic to scale the text and icons based on the distance from the user's camera, ensuring they remain legible from across the room.
* [ ] **Persistent Spatial Anchors**: Integrate WebXR anchor retention to ensure tags stay in the exact physical location even if the browser is closed and reopened.
* [ ] **Automated Object Recognition**: Implement on-device machine learning (like TensorFlow.js) to automatically recognize objects (e.g., a pill bottle) and automatically attach the correct tag without requiring a manual screen tap.
* [ ] **Multi-User Synchronization**: Add a backend (e.g., Firebase or WebSockets) so that when one user places a tag in the living room, another user wearing a headset instantly sees it.
