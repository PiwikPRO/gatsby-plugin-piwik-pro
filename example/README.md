# Example project with usage of Piwik PRO Library for Gatsby

Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in Gatsby applications.

- [Installation](#installation)
- [Configuration](#configuration)
- [Run](#project-run)

## Installation

Go to the top library directory. Install it's dependencies and build library using commands: 

```
npm install
npm run build
```

Then back to the demo directory and continue.

Install all demo packages running command:

```
npm install 
```

## Configuration

Add your Piwik PRO panel container URL and container identifier in `.env` file and they will be automatic attached into the `gatsby-config.ts` file.
Project is ready to run.

## Run

To run example project use command:

```
npm run develop
```

Project is accessible in browser under `http://localhost:8000` address.
