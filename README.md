# Palforzia Patient Full Site

## Getting Started
Use Node version 8.12.0 or you may receive errors.

Install it with
```
npm i
```

Create `.env` file at the root of the project. Then go to [Confluence](https://giantagency.atlassian.net/wiki/spaces/AD/pages/648314881/Contentful+CMS+Palforzia+HCP+Patient+Websites) and get the space ID, delivery API Key and preview API Key. (Without this, the app will not compile)

Start Node wtih
```
npm run start
```

Build for production distribution
```
npm run build
```

## Fortawesome Support
Run the following command
```
npm config set @fortawesome:registry https://npm.fontawesome.com/EEFD84F8-907F-4B20-82D9-DC20387F3808
```
## PM2 Deployment
For the most recent `ecosystem.config.js` file and configuration instructions go to https://github.com/GiantAgency/PM2-Deployment-Congifuration

## Gotchas

1. If you're not able to compile due to "errors in your GraphQL queries" that have to do with Contentful, run the following command: `gatsby clean` and try to compile again.