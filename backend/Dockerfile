# Stage 1: Install dependencies
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Stage 2: Production image
FROM node:18-slim

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app /app

# Expose the backend port
EXPOSE 3000

# Run the backend application
CMD ["npm", "start"]
