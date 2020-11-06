# zekfad.znnnme.eu.org

This is the source for [my landing website](https://zekfad.znnme.eu.org).

## Develop

### Prepare workspace

* Clone repo **with submodules**:
  ```shell
  $ git clone --recurse-submodules https://github.com/Zekfad/zekfad.znnme.eu.org.git
  ```
* **Use `yarn`**.
* Install dependencies one of the following ways:
  * Reproduce my workspace:
    ```shell
    $ yarn install --frozen-lockfile
    ```
  * Create clean new workspace (without native dependencies):
    ```shell
    $ yarn install --ignore-optional
    ```
  * Create clean new workspace (with native dependencies):
    ```shell
    $ yarn install
    ```

### Edit source

* `/`
  * `client/` - Nuxt web app source is here.
    * `dist/` - Ready to deploy static web app will be built here.
	* `assets/scss/utils/scss-utils/` - [scss-utils](https://github.com/Zekfad/scss-utils) submodule. **Remember to clone it**.

### Build

* Build Nuxt app:
  ```shell
  $ yarn build
  ```
* Generate static files:
  ```shell
  $ yarn generate
  ```

### Deploy

* Deploy to `gh-pages` branch (force push):
  ```shell
  $ yarn deploy
  ```
* Manually deploy:
  Grab the files from `/client/dist/`.

### Get help

* Get all help pages:
  ```shell
  $ yarn help:all
  ```
  or
  ```shell
  $ yarn run help
  ```
  or (at project root)
  ```shell
  $ node .
  ```
* Commands help:
  ```shell
  $ yarn help:commands
  ```
* Environmental variables help:
  ```shell
  $ yarn help:vars
  ```
