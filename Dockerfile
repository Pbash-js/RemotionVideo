# Dockerfile for Remotion project with ffmpeg
FROM node:20-alpine

WORKDIR /app

# Install ffmpeg
RUN apk add --no-cache ffmpeg

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Install express if not already
RUN npm install express
RUN npm install -g pm2
# Copy the API file
COPY render-api.js ./render-api.js


RUN npm run build

EXPOSE 3000
EXPOSE 4000

CMD ["pm2-runtime", "ecosystem.config.js"]
