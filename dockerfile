# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight image for the production environment
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]