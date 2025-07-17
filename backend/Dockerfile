# Étape 1: Utiliser Node.js officiel
FROM node:22-alpine

# Étape 2: Créer dossier de travail
WORKDIR /app

# Étape 3: Copier fichiers nécessaires
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

# Étape 4: Exposer le port et démarrer le serveur
EXPOSE 3000
CMD ["node", "server.js"]
