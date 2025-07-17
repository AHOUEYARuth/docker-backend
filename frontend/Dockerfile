# Étape 1 : build de l'application
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : serveur nginx pour servir l'app
FROM nginx:alpine

# Supprime la config nginx par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie les fichiers construits vers nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
