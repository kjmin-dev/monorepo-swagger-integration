# msg-swagger-integration

Demo showcasing Swagger doc integration for microservices in a monorepo setup.

### Getting Started
You need to have `nvm` installed.
1. Setup runtime environment
```sh
nvm install # or the version specified in .nvmrc
corepack enable && corepack prepare # or install `packageManager` specified in package.json
```
2. Install dependencies
```sh
yarn install
```
3. Run commands
```sh
yarn build
yarn swagger:integration
```
