videojs.com
===========

The Video.js Website

Instructions
------------

To run the site locally, install [wintersmith](http://wintersmith.io/) globally using npm:

	sudo npm install -g wintersmith

Change to the repo's root directory and ask wintersmith to build the site. This will generate the static site in videojs.com/build. _Note:_ you may be prompted to install the wintersmith-less module before the build will succeed:

	cd videojs.com
	wintersmith build

Finally, run the site:

	wintersmith preview

Withersmith will return a host and port to view the site, usually [http://localhost:8080/](localhost:8080)

## Release and Deploy

Update to latest video.js version and build site files

```
grunt release
```

Deploy to staging for testing (always test staging before deploying to production)

```
grunt deploy:staging
```

Deploy to production

```
grunt deploy:production
```