FROM node:22-bookworm-slim

WORKDIR /app

# Install ffmpeg and Chrome dependencies 
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libexpat1 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    xdg-utils \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*
# Copy package files
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* bun.lockb* bun.lock* tsconfig.json* remotion.config.* ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .
# Install express if not already
RUN npm install express
RUN npm install -g pm2
# Copy the API file
COPY render-api.js ./render-api.js


# Install Chrome for Remotion
RUN npx remotion browser ensure

# Build the project
RUN npm run build

EXPOSE 3000
EXPOSE 4000

CMD ["pm2-runtime", "ecosystem.config.js"]
