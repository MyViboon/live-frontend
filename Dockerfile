# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the app's source code to the container
COPY . .

# Build the app using Vite.js
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npx", "serve", "dist"]
