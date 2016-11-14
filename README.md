# tieto_base 
Extendable, modern frontend experience for Tieto projects.

---

## Quick setup

For existing Drupal:

1. Run `git clone https://github.com/gergelypap/tieto_base.git <project>/themes`
2. Enable in admin Appearance page.

If you have no Drupal and just want to develop:

1. Run `composer create-project drupal-composer/drupal-project <project> --stability RC --no-interaction`
2. `cd <project>`
3. Run `git clone https://github.com/gergelypap/tieto_base.git web/themes`
4. Enable in admin Appearance page.

## Build

You need [Node.js](https://nodejs.org/en/) for theme development. After you have `node` and `npm` and `gulp` in your Terminal run `npm install` to install dependencies.

### Assets

1. Run `gulp` for single compile of assets.
2. Run `gulp --production` for preparing assets for production (minification, bundling, etc.)
3. Run `gulp watch` for watching on file changes, i.e. when developing stuff.

### KSS Styleguide

1. Run `gulp kss` for single compile of the styleguide. (A directory named styleguide will be created in the root folder)
2. Run `gulp kss:watch` for watching on file changes.

## Links

* Styleguide: https://drive.google.com/file/d/0B8W_7QR5lW39MXJfWWsyTUdPSms/view?ts=57c5882b
* Specs: https://drive.google.com/open?id=1Ruu0794rHVA4O5hpyQIXBqlp3jQ_qMEUQNFX7TJDWyU
* Tutorials: https://www.drupal.org/docs/8/theming-drupal-8
