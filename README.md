# Project Documentation: Project Identity (Meta Quest 3S Edition)

> **Tagline:** Stop guessing, start seeing.  
> **Target Event:** YISL U.S. Embassy AR/VR Workshop  
> **Project Type:** Assisted Living, Digital Health, and Smart-Home Spatial Utility  
> **Hardware Target:** Meta Quest 3S (Passthrough Mixed Reality & Spatial Anchor Engine)  
> **WebXR Framework:** FrameVR / A-Frame Engine  

---

## 📋 Table of Contents
1. [Executive Summary](#-executive-summary)
2. [The Core Problem](#-the-core-problem)
3. [The Spatial Solution](#-the-spatial-solution)
4. [Dual-Operating System Modes](#-dual-operating-system-modes)
5. [Hardware Integration: Meta Quest 3S](#-hardware-integration-meta-quest-3s)
6. [Core Technical Architecture](#-core-technical-architecture)
7. [Step-by-Step Prototype Build Guide (FrameVR & Meta Quest 3S)](#-step-by-step-prototype-build-guide-framevr--meta-quest-3s)
8. [Social Impact & Sustainability Metrics](#-social-impact--sustainability-metrics)
9. [Future Roadmap](#-future-roadmap)

---

## 🏛️ Executive Summary

**Project Identity** is an inclusive, head-worn spatial computing application built for the **Meta Quest 3S** using **FrameVR / WebXR technology**. It transforms the physical living space into an interactive, digital information layer rendered directly through full-color passthrough MR.

By leveraging real-time spatial mapping, persistent WebXR spatial anchors, and hands-free Quest 3S interaction (hand tracking & voice commands), the application offloads daily cognitive strain from the human brain onto a spatial interface. Users can lock dynamic 3D pointers, real-time expiration countdowns, allergen hazard shields, and family photo identity badges directly onto physical real-world objects.

Designed with universal access at its core, Project Identity functions both as a hands-free memory aid for individuals living with early-stage dementia and as a high-efficiency spatial organization tool for busy households.

---

## 🚨 The Core Problem

### 🧠 The Dementia & Accessibility Friction
For individuals experiencing early-to-mid-stage dementia, cognitive decline, or age-related memory gaps, independent living introduces continuous daily friction:
* **The Invisible Hazard:** Forgetting whether a vital medication has been taken or if food in the pantry is expired.
* **Text Fatigue:** Squinting at microscopic prescription text or tiny allergen warnings on packaging.
* **Identity Confusion:** Accidental cross-consumption of prescription medication in multi-person households due to identical pill bottles.
* **Out of Sight, Out of Mind:** Storing essentials inside drawers, refrigerators, or cabinets, leading to item abandonment and spoilage.

### 💼 The Universal Household Friction
In everyday neurotypical homes, parallel organizational friction occurs:
* **Financial & Food Waste:** Global households throw away significant quantities of edible food annually due to poor pantry visibility.
* **Shared Space Friction:** Roommates and multi-generational families frequently miscommunicate over shared items, dietary constraints, and task distribution.

---

## 💡 The Spatial Solution

Project Identity does not seek to make physical objects smart; instead, it provides the user with smarter, context-aware vision via the **Meta Quest 3S Passthrough Engine**.

```
[Meta Quest 3S RGB Passthrough] ➡️ [FrameVR WebXR Spatial Map] ➡️ [Persistent 3D Spatial Tag]
                                                                            │
                 ┌──────────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────┐
                 ▼                                                                                                                     ▼
       (🧠 Assist Mode)                                                                                                    (⚡ Productivity Mode)
 - X-Ray Occlusion (Cabinet Glow)                                                                                   - Floating Freshness Countdown
 - 3D Allergy Hazard Shields                                                                                        - Digital Fridge Index
 - Large Photo Avatar Badges                                                                                        - Shared Kitchen "Claims" Tags
```

By anchoring high-contrast, color-coded 3D holographic cards directly onto physical coordinates, the surrounding environment dynamically communicates safety status, ownership, and freshness back to the user without requiring hand-held smart devices.

---

## 🛠️ Dual-Operating System Modes

### 🧠 Mode 1: Assist & Dementia Mode
* **Focus:** Accessibility, High-Contrast UI, Frictionless Hands-Free Assist.
* **The X-Ray Occlusion Visualizer:** When critical items (such as daily prescriptions) are stored inside drawers or cabinets, the app retains their spatial coordinates. Looking at a closed cabinet door renders a translucent 3D glowing frame over the cabinet face, indicating active items inside.
* **3D Allergen Hazard Shield:** Scanning a product with matching user allergies (e.g., Peanuts, Shellfish, Gluten) generates a prominent Red 3D Warning Shield over the item displaying **"DO NOT CONSUME"**.
* **Photo-Based Identity Badges:** Instead of small text tags, scanning shared medicine trays overlays large floating avatar photos indicating ownership (e.g., displaying a spouse's photo over their respective prescription).

### ⚡ Mode 2: Everyday Productivity Mode
* **Focus:** Spatial Organization, Food Waste Reduction, Household Efficiency.
* **Pantry Freshness Tracker:** Registering item barcodes or spatial positions auto-calculates expiration dates, generating floating green/yellow/red countdown rings above food items.
* **The Shared Fridge Index:** In shared living environments, users anchor 3D spatial labels (e.g., "Reserved for Alex" or "Free to Share") directly onto physical containers inside the refrigerator.
* **Spatial Memory Pointer:** Setting a marker on essential personal items (keys, wallet, tools) generates a 3D floor navigation vector pointing directly to their mapped spatial anchors.

---

## 🥽 Hardware Integration: Meta Quest 3S

Optimizing Project Identity for the **Meta Quest 3S** unlocks head-worn, hands-free spatial functionality:

| Feature | Quest 3S Optimization |
| :--- | :--- |
| **Passthrough Capabilities** | High-definition color passthrough enables seamless blending of physical environments with WebXR 3D overlays. |
| **Spatial Tracking** | Integrated inside-out 6DOF tracking maintains accurate position pinning for spatial anchors across room boundaries. |
| **Interaction Model** | Native support for Quest 3S Hand Tracking and Pinch Gestures—no physical controllers required for senior accessibility. |
| **Performance Target** | FrameVR / WebXR scene optimized to run at a continuous 72Hz–90Hz refresh rate to minimize visual fatigue. |

---

## ⚙️ Core Technical Architecture

Project Identity utilizes three main architectural modules within the FrameVR/WebXR framework:

```
+------------------------------------------------------------+
|             Project Identity Engine (FrameVR)              |
+------------------------------------------------------------+
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
+--------------+        +--------------+        +--------------+
| WebXR Spatial|        | Spatial Depth|        | Dynamic UI   |
| Tracking     |        | & Occlusion  |        | Distance Scale|
+--------------+        +--------------+        +--------------+
```

1. **WebXR Spatial Anchoring:**  
   Uses the Meta Quest 3S browser WebXR Device API to map physical room features into persistent point vectors. WebXR anchors persist 3D models across active sessions.

2. **Spatial Depth & Passthrough Blend:**  
   Integrates WebXR depth sensing to ensure digital assets render in front of or behind real-world physical structures depending on view distance and occlusion settings.

3. **Dynamic UI Distance Scaling:**  
   Calculates real-time vector distance between the Quest 3S head position and the target anchor. Text labels, icons, and avatars adjust scale dynamically to preserve legibility across varied viewing distances.

---

## 🚀 Step-by-Step Prototype Build Guide (FrameVR & Meta Quest 3S)

### 📦 Phase 1: FrameVR Environment Setup
1. Log into [FrameVR.io](https://framevr.io) and create a new **Custom AR/MR Frame**.
2. Enable **Passthrough Mode** under Scene Settings so the Meta Quest 3S camera feed serves as the primary canvas background.
3. Upload low-poly 3D spatial assets (`.gltf` or `.glb` format):
   * `hazard_shield.glb` (Red Warning Octagon)
   * `freshness_ring.glb` (3D Timer Ring)
   * `avatar_badge.glb` (Circular Image Frame)

### 🔧 Phase 2: WebXR Anchor & Logic Configuration
Set up spatial tracking and conditional status logic using WebXR / FrameVR API script blocks:

```javascript
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

    // Check Allergen Condition
    if (data.isAllergen) {
      el.setAttribute('gltf-model', '#hazard_shield');
      el.setAttribute('scale', '1.5 1.5 1.5');
      console.log("ALERT: Allergen Shield Active!");
      return;
    }

    // Check Freshness Condition
    if (data.expiryDays <= 0) {
      el.setAttribute('material', 'color', '#FF2D00'); // Pulsing Red
    } else if (data.expiryDays <= 2) {
      el.setAttribute('material', 'color', '#FFC300'); // Warning Yellow
    } else {
      el.setAttribute('material', 'color', '#2ECC71'); // Safe Green
    }
  }
});
```

### 🥽 Phase 3: Quest 3S Testing & Deployment
1. Launch the **Meta Quest Browser** inside the Quest 3S headset.
2. Navigate to your dedicated FrameVR URL (`framevr.io/project-identity`).
3. Select **Enter AR / Passthrough Mode** in the lower-right corner of the FrameVR interface.
4. Test spatial anchor retention by walking around physical room boundaries and verifying sticker/anchor lock.

---

## 📊 Social Impact & Sustainability Metrics

* **UN Sustainable Development Goals (SDGs):**
  * **Goal 3 (Good Health & Well-Being):** Mitigates medication errors and improves household safety for individuals with cognitive decline.
  * **Goal 12 (Responsible Consumption & Production):** Reduces domestic food waste through automated visual freshness tracking.
* **Independence Dividend:** Supports extended independent living for individuals with mild cognitive impairments, reducing reliance on immediate full-time care.
* **Domestic Waste Reduction:** Targets an estimated **20%–25% reduction** in household food waste through proactive spatial notifications.

---

## 🔮 Future Roadmap

* **Phase 1 (Current):** WebXR FrameVR prototype running on Meta Quest 3S passthrough with manual anchor placement.
* **Phase 2:** Automated object recognition via integrated Quest 3S camera feed machine learning (on-device object detection).
* **Phase 3:** Multi-user WebXR synchronization enabling real-time spatial note-sharing and shared family dashboards across multiple headsets.