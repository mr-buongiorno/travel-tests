# Automation Test Guide

Below is guide for a newcomers, on how to deal with Automation tests in our company. Have fun and good luck!

## Requirements

- [NVM guide](https://github.com/nvm-sh/nvm) - to manage nodejs version, please use version in `.nvmrc` file.
- [VS Code](https://code.visualstudio.com) - IDE

## Documentation

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Clean Code Guide](https://github.com/ryanmcdermott/clean-code-javascript)

## Installation

1. First of all, you need to check if you have nvm installed:

```sh
nvm -v
```

and after it set nodejs version using command:

```sh
nvm use
```

2. Run command to install all required nodejs packages:

```sh
npm i
```

3. Run command to install playwright web browsers:

```sh
npx playwright install
```

## Tests configuration

- In `.env` file you can set your own host addresses.
- in file `playwright.config.ts` you can find playwright configuration. More info [Playwright Configuration Documentation](https://playwright.dev/docs/test-configuration)

## Run Tests

There is a couple options to run tests:

- Run tests using playwright GUI:

```sh
npm run test:ui
```

- Run alls test from all projects:

```sh
npm run test:all
```

- Run tests from single project:

```sh
npm run test:pl
```

## Report Generation

- Run tests from single project:

```sh
npm run test:report
```

## Linting

- Run linting only:

```sh
npm run lint
```

- Run linting with fix:

```sh
npm run lint:fix
```
