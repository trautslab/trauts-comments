# UNI English Prep

Aplicación mobile-first/PWA para practicar el Examen de Suficiencia de Inglés de la Universidad Nacional de Ingeniería (Lima, Perú).

El proyecto contiene un banco de 270 preguntas autocorregibles, incluyendo ejercicios recuperados de la guía de preparación UNI y ejercicios adicionales A2–B1/B1+, además de diagnóstico, práctica por tema, reading, revisión de errores y simulacro.

## Build

Los assets de la aplicación se guardan comprimidos en `bundle.json`. El build los reconstruye en `dist/`:

```bash
npm run build
```

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `None`

La v1 no requiere backend ni variables de entorno. El progreso se almacena en `localStorage` del navegador.

> La guía PDF utilizada es material de preparación y no un solucionario oficial de la UNI.
