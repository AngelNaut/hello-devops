FROM node:20-alpine
WORKDIR /app

# Copiamos manifest + lockfile para instalar deps en capa separada
COPY package*.json ./

# Instala solo deps de producción usando npm ci (requiere package-lock.json)
RUN npm ci --omit=dev

# Copia el código de la app
COPY src ./src

EXPOSE 3000
CMD ["node", "src/index.js"]
