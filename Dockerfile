# Dockerfile for Remotion project with ffmpeg
FROM node:20-alpine

WORKDIR /app

# Install ffmpeg
RUN apk add --no-cache ffmpeg

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "remotion", "preview"]
