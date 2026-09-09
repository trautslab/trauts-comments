# UNI English Prep

Aplicación mobile-first/PWA para practicar el Examen de Suficiencia de Inglés de la Universidad Nacional de Ingeniería (Lima, Perú).

El proyecto contiene un banco de 300 preguntas autocorregibles, incluyendo ejercicios recuperados de la guía de preparación UNI, ejercicios vistos en el proyecto y ejercicios adicionales A2–B1/B1+, además de diagnóstico, práctica por tema, reading, repaso intensivo, revisión de errores y simulacro.

## Build

Para poder transferir la aplicación completa mediante la integración de GitHub, los assets estáticos están comprimidos y divididos en `bundle.part.00` … `bundle.part.07`. `build.mjs` los une, descomprime y reconstruye byte por byte en `dist/`:

```bash
npm run build
```

El build genera:

- `index.html`
- `styles.css`
- `app.js`
- `data.json`
- `manifest.webmanifest`
- `sw.js`
- `_headers`
- `icon.svg`

## Cloudflare Pages

- Production branch: `main`
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

La v1 no requiere backend, secretos ni variables de entorno. El progreso se almacena en `localStorage` del navegador.

> La guía PDF utilizada es material de preparación y no un solucionario oficial de la UNI.
