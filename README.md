# Zion Inn Homestay

## Updating Room Photos

Room editing is intentionally kept out of the public website. To change photos as the developer:

1. Add the new image files to `public/images/`.
2. Open `src/data/homestayData.js`.
3. In `INITIAL_ROOMS`, update the `image` field for the main photo.
4. Replace the paths inside that room's `gallery` array for its detail photos.
5. Use `roomType: 'ac'` for the AC room and `roomType: 'non-ac'` for the Non-AC room.

Example:

```js
image: '/images/ac-room-main.jpg',
gallery: [
	'/images/ac-room-main.jpg',
	'/images/ac-room-bed.jpg',
	'/images/ac-room-bathroom.jpg'
]
```

The files in `public/images/` are served directly by Vite, so no import is needed. Keep the filename and path exactly the same in the data file.

## Development

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
