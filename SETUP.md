# Setup Guide: Testing the WebXR Prototype Locally

Since WebXR applications require a secure context or a local development server to function properly (especially for camera passthrough access), you cannot simply double-click the `index.html` file to test it. 

Since you have the **Live Server** extension installed in VS Code, following these steps is the easiest way to test the prototype on your headset or phone.

## 1. Start the Live Server

1. Open the `mark50` project folder in Visual Studio Code.
2. In the file explorer panel on the left, locate and open `index.html`.
3. In the bottom-right corner of the VS Code window, you should see a button that says **"Go Live"**. Click it.
   * *Alternatively: Right-click anywhere inside the `index.html` code and select **"Open with Live Server"**.*
4. Your default web browser will automatically open to a local address (usually `http://127.0.0.1:5500/index.html` or `http://localhost:5500/index.html`), showing the prototype running.

## 2. Test on your Meta Quest 3S or Mobile Phone

To test the AR features, you need to open that local server on your XR device. Since your headset/phone is a different device than your computer, `localhost` won't work on them. You need to use your computer's local network IP address.

1. **Find your Computer's IP Address:**
   * Open the Command Prompt or Terminal in VS Code.
   * Type `ipconfig` (Windows) and press Enter.
   * Look for the **IPv4 Address** (it usually looks something like `192.168.1.X` or `10.0.0.X`).

2. **Connect your Device:**
   * Ensure your Meta Quest 3S or mobile phone is connected to the **exact same Wi-Fi network** as your computer.

3. **Open the App:**
   * Open the Meta Quest Browser (on the headset) or Chrome (on an Android phone).
   * Type your IP address followed by the Live Server port into the URL bar. 
   * Example: `http://192.168.1.5:5500`

## 3. Interact with the AR Prototype

1. Once the page loads on your device, you will see the 2D UI overlay.
2. In the bottom right corner of the 3D scene, tap the **"VR"** or **"AR"** button.
3. Your device may ask for permission to access the camera or immersive features—click **Allow**.
4. You are now in Passthrough Mode!
5. Select a tool from the bottom menu (e.g., "Allergen Shield") and tap anywhere on your screen or use your controller/hand-tracking pinch to spawn the item into your room.
