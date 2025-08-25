# Hello DevOps (CI/CD)

Pequeña app Node.js + Express + Jest + Docker + GitHub Actions + Render.

## Scripts
- `npm i` instala dependencias
- `npm t` ejecuta pruebas
- `npm start` levanta servidor en `:3000`

## Docker
```bash
docker build -t <usuario>/hello-devops:local .
docker run -p 3000:3000 <usuario>/hello-devops:local
```

## CI/CD
Al hacer push a `main`:
1. Instala dependencias
2. Corre pruebas
3. Construye y sube imagen a Docker Hub
4. Dispara despliegue en Render (Deploy Hook)

### Secrets requeridos (GitHub → Settings → Secrets and variables → Actions)
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `RENDER_DEPLOY_HOOK`
