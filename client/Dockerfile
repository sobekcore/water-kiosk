FROM node:18-alpine

# Set current user to node
USER node

# Fallback value for the DOCKER_CLIENT_ENV argument
ARG DOCKER_CLIENT_ENV="prod"

# Set necessary environment variables
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
ENV ENVIRONMENT=${DOCKER_CLIENT_ENV}

# Copy all application files to the container
COPY --chown=node:node . /home/node/app

# Set work directory to the copied directory
WORKDIR /home/node/app

# Install necessary npm dependencies
RUN npm install -g serve
RUN npm ci

# Build application for production with minification
RUN npm run build

# Serve application differently depending on the configuration
CMD sh .docker/serve ${ENVIRONMENT}
