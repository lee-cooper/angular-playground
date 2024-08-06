# Hosting an Angular App in Docker

## Resources

- https://dev.to/rodrigokamada/creating-and-running-an-angular-application-in-a-docker-container-40mk

## Commands

The FROM node:alpine setting defines the base Docker image.
The WORKDIR /usr/src/app setting defines the default application directory. The defined directory is created if it does not exist.
The COPY . /usr/src/app setting copies the local application files and directories to the defined directory.
The npm install -g @angular/cli setting installs the global command line dependency for Angular.
The RUN npm install setting installs the Angular application dependencies.
The CMD ["ng", "serve", "--host", "0.0.0.0"] setting creates and runs the Angular application for external access.

## Creating the Angular Image

`docker build -t angular-docker .`
