# Stage 1: Build the React app
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the frontend code and build the app
COPY . . 
RUN npm run build

# Stage 2: Serve the React app
FROM node:18-slim

WORKDIR /app

# Copy only the built application from the builder stage (using dist instead of build)
COPY --from=builder /app/dist ./dist

# Install a simple static file server for React
RUN npm install -g serve

# Expose the frontend port
EXPOSE 5173

# Serve the React app
CMD ["serve", "-s", "dist", "-l", "5173"]
