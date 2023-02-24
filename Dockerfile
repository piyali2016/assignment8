# Use an official Node.js runtime as the parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Set the command to start the React app
CMD ["npm", "start"]
