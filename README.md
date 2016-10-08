# videojs.com (the [video.js](https://github.com/videojs/video.js) website)

The site uses [Harp](https://harpjs.com) as the main framework. It also uses [Browserify](http://browserify.com) and [Babel](https://github.com/babel/babelify) for ES2015 (javascript) modules.


### Setup

1. Install the dependencies

  ```
  $ npm install
  ```

2. Run the grunt dev task to generate the files and run a server. Once it's running you can start working. A local preview is running on port 9000.

  ```
  $ grunt dev
  ```

### Deploy

We use github pages for site hosting. The site files live in the `master` branch and then are moved to the `gh-pages` branch to be deployed. The file structure is changed during the deploy process so gh-pages is **never** merged back into master.

1. Make sure the `master` branch is up to date.

    ```
    git pull master
    ```

2. Checkout the gh-pages branch and make sure it's up to date, then merge master into it.

    ```
    git checkout gh-pages
    git pull gh-pages
    git merge master
    ```

3. Generate the dist files.

    ```
    grunt dist
    ```

4. Push the changes.

    ```
    git push
    ```

> **If you accidently run `grunt dist` in the master branch you need to reset your branch. Don't push dist files to master.
