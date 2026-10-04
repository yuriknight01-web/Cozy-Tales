# Cozy Tales · 咕噜物语

Official game introduction website for YUstar Game Studio.

- Website: https://yuriknight01-web.github.io/Cozy-Tales/
- Steam: https://store.steampowered.com/app/5328210/Cozy_Tales/?beta=1
- Creator portfolio: https://yuriknight01-web.github.io/Porfolio/

## Hosting

This is a self-contained static site with no build step, paid hosting subscription, API key or server dependency. In GitHub **Settings → Pages**, select **Deploy from a branch → main → / (root)**. GitHub Pages publishes updates committed to main. The URL stays the same while the repository and Pages configuration remain available.

## Preview locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. To exercise a repository subpath, serve the parent directory and open `/Cozy-Tales/`.

## Maintain the page

- `index.html`: English content, Chinese translations in `data-zh`, metadata and destinations.
- `styles.css`: responsive layout, colors and reduced-motion support.
- `script.js`: language preference and accessible screenshot lightbox. No analytics or third-party scripts.
- `*.webp`: optimized promotional art and real development screenshots.
- `gameplay.mp4`: existing gameplay trailer, loaded only when requested by the visitor.

Keep the platform status current: the initial page describes Steam as coming soon and iOS as in development. Replace these labels when each version is released. Do not display a mobile download button until its real store URL exists.

English is available without JavaScript. With JavaScript, the site uses the browser language initially and remembers the visitor's choice when local storage is available. Screenshot links still open the full image without JavaScript.

## Artwork

This repository contains promotional media prepared for this game, not the Unity project or original asset packs. Public availability does not grant a license to redistribute the game art, logo or video.
