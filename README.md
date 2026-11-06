# hoju-ui

> Lightweight CSS component library — buttons, cards, badges, modals, tabs, toasts. Dark-first. Zero JS dependencies.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Install

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hojullc/hoju-ui@1/src/hoju-ui.css">
<script src="https://cdn.jsdelivr.net/gh/hojullc/hoju-ui@1/src/hoju-ui.js"></script>
```

## Components

| Component | Class | Description |
|-----------|-------|-------------|
| Button | `.btn .btn-primary` | Gradient primary, secondary, ghost, icon, sm, lg |
| Card | `.card .card-hover` | Glassmorphic card with hover lift |
| Badge | `.badge .badge-dot` | Colored pill badges with dot variant |
| Input | `.input` | Dark styled text input |
| Tabs | `.tabs .tab-btn` | JS-powered tab switcher |
| Modal | `.modal-overlay .modal` | Overlay modal with Escape support |
| Toast | JS: `HojuUI.toast()` | Auto-dismissing toast notifications |
| Avatar | `.avatar` | Circular avatar with size variants |
| Progress | `.progress` | Animated progress bar |
| Skeleton | `.skeleton` | Shimmer loading placeholder |

## Usage

```html
<button class="btn btn-primary">Get Started</button>
<div class="card card-hover">...</div>
<span class="badge">New</span>
```

```js
HojuUI.toast('Saved!', { type: 'success' });
HojuUI.modal('my-modal');
```

## Theming

Override CSS variables to customize:

```css
:root {
  --hoju-primary: #7064ff;
  --hoju-pink: #ff6b9d;
  --hoju-cyan: #06b6d4;
}
```

## License

MIT (c) Hoju LLC https://hoju.us
