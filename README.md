# Infura NFT API Dashboard

This full-stack application demonstrates some potential use-cases for the Infura Read NFT-API such as:

- Displaying the First NFT ever minted in a collection
- Displaying all NFTs owned by a wallet

[Sign up for a free Infura account](https://infura.io/register?utm_source=github&utm_medium=devcommunity&utm_campaign=2022_Jul_devrel-sample-projects_content_content)

[Sign up for the BETA](https://infura.io/resources/apis/nft-api-beta-signup)

Have other use-cases you'd like to see?  Open up an [issue on Github!](https://github.com/anataliocs/Infura-NFT-Dashboard/issues)

## Infura NFT-API Resources

Check out these resources for more information:

- [Infura NFT API Promo Video](https://youtu.be/ERV_FbCDBIQ)
- [Infura NFT API Swagger docs](https://docs.api.infura.io/nft/)
- [Infura Web Site](https://infura.io/use-cases/nft)
- [Sample Reference App](https://github.com/anataliocs/Infura-NFT-Dashboard)
- [Truffle Box](https://github.com/truffle-box/nft-api-box)
- [Infura NFT API SDK](https://www.npmjs.com/package/@infura/sdk)
- [Infura NFT API Docs](https://docs.infura.io/infura/features/nft-sdk/how-to)
- [Infura Discord](https://discord.com/invite/vbx6jy6XC8)

Check out the [Infura Lootbox NFT API Coding Challenge](https://lootbox.consensys.net)

Don't have an Infura account yet?  [Sign up now!](https://infura.io/register?utm_source=github&utm_medium=devcommunity&utm_campaign=2022_Jul_devrel-sample-projects_content_content)

## Project Config

You must setup your local project with your Infura Project ID and Secret.  

Ensure you've signed up for the  [NFT API Beta](https://infura.io/resources/apis/nft-api-beta-signup)

On Mac:

Create the properties file:

`touch ~/.spring-boot-devtools.properties`

Open the properties file:

`vi ~/.spring-boot-devtools.properties`

Add the following line to properties file:

```
infura.nft.projectid=[Project ID]
infura.nft.projectsecret=[Project secret]
```

On Windows:

Add `infura.nft.projectid` and `infura.nft.projectsecret` to `src/main/resources/config/application-dev.yml`

## Run the app

Then run the app using

`./gradlew`

Then login locally using the canned login: admin/admin

## Connect with the Author

I'm Chris Anatalio and I'm a Platform Advocate at ConsenSys supporting Infura.

TG: @anataliocs
Discord: Chris Anatalio | Infura#3855
Twitter: @canatalio

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

```
npm install
```

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```
./gradlew -x webapp
npm start
```

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all of the scripts available to run for this project.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

```
npm install --save --save-exact leaflet
```

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

```
npm install --save-dev --save-exact @types/leaflet
```

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Testing

To launch your application's tests, run:

```
./gradlew test integrationTest jacocoTestReport
```

### Client tests

Unit tests are run by [Jest][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

```
npm test
```

For more information, refer to the [Running tests page][].

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

Note: we have turned off authentication in [src/main/docker/sonar.yml](src/main/docker/sonar.yml) for out of the box experience while trying out SonarQube, for real use cases turn it back on.

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the gradle plugin.

Then, run a Sonar analysis:

```
./gradlew -Pprod clean check jacocoTestReport sonarqube
```

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a postgresql database in a docker container, run:

```
docker-compose -f src/main/docker/postgresql.yml up -d
```

To stop it and remove the container, run:

```
docker-compose -f src/main/docker/postgresql.yml down
```

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

```
./gradlew bootJar -Pprod jibDockerBuild
```

Then run:

```
docker-compose -f src/main/docker/app.yml up -d
```

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 7.8.1 archive]: https://www.jhipster.tech
[using jhipster in development]: https://www.jhipster.tech/development/
[using docker and docker-compose]: https://www.jhipster.tech/docker-compose
[using jhipster in production]: https://www.jhipster.tech/production/
[running tests page]: https://www.jhipster.tech/running-tests/
[code quality page]: https://www.jhipster.tech/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/setting-up-ci/
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[webpack]: https://webpack.github.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
