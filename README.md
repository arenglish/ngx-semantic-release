# ngx-semantic-release

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to
[build Angular apps](https://angular.io/cli/build) in preparation for publishing.

# Example for specific branch:
[![CircleCI](https://circleci.com/gh/arenglish/ngx-semantic-release/tree/master.svg?style=svg)](https://circleci.com/gh/arenglish/ngx-semantic-release/tree/master)

[![npm latest version](https://img.shields.io/npm/v/ngx-semantic-release/latest.svg)](https://www.npmjs.com/package/@semantic-release/github)

| Step               | Description                                                                                                                                                                                                                              |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prepare`          | Build all or only specified angular app projects                                                                                                                        |

## Install

```bash
$ npm install ngx-semantic-release -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "ngx-semantic-release"
  ]
}
```

### Options

| Option                | Description                                                                                                                                                                                            | Default                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `apps`                | An array of apps to publish.                                                                                                                                                                           | [] (if empty will publish all)                                                                                                       |
| `buildCommand`        | A custom command to run for publishing apps (muse contain $app variable which will be replaced with the app name).                                                                                     | ng build $app                                                                                                       |
| `buildOptions`        | Additional options to supply build command.                                                                                                                                                            | ["--prod"]                                                                                                 |
