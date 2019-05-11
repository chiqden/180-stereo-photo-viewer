# 180 Stereo Photo Viewer
A VR180 photo viewer that works on a web browser.

### Supported photo formats
- VR180 photos (vr.jpg)
- 180 stereo side by side photos

### Features
- Zenith correction (support Cardboard Camera VR Photo Format)
- Offline support (experimental)

### Notes
- You need “Motion & Orientation Access” permission to use with Safari on iOS 12.2.  
  `Settings` -> `Safari` -> `PRIVACY & SECURITY` -> `Motion & Orientation Access`

### Usage
- Specify a photo in HTML file  
  Set the path of the photo to `index.html` `<img id="stereoImage" src="">`.  
- Select a photo in file picker  
  Double-click(tap) on the browser to select a photo.
- To disable file picker  
  Remove `file-picker` component from `index.html` `<a-scene 180-stereo-photo-viewer file-picker …>`
- To disable offline support  
  1. Comment out `index.html` `<script src="scripts/offline-support.js"></script>`.
  2. Unregister the Service Worker.
  3. Delete the cache.
