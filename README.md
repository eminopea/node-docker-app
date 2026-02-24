# node-docker-app
Construcción de imágenes Docker y despliegue mediante Docker Compose para una aplicación Node.js conectada a MongoDB.

## ✅ Nota
### Para simplificar la ejecución de la práctica se incluye el script:
run.bat
  ** El cual automatiza el proceso de construcción, despliegue y obtención de logs.

El archivo contiene: 
### ✅ Construcción de la imagen
docker compose build

### ✅ Despliegue de contenedores
docker compose up -d

### ✅ Obtención de logs
docker compose logs -f > logs/logs_contenedores.log


### Los logs se almacenan en:
logs/logs_contenedores.log

## ✅ Ejecución desde Docker Hub
Si desea ejecutar la aplicación sin Docker Compose:

### 1️⃣ Crear red Docker
docker network create app-network

### 2️⃣ Ejecutar MongoDB
docker run -d --name mongo --network app-network mongo:7

### 3️⃣ Ejecutar aplicación Node.js
docker run -p 3000:3000 --network app-network eminope/node-docker-app

## ✅ Acceso a la aplicación
Abrir en el navegador:
http://localhost:3000
