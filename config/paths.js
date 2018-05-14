const path = require('path');

const WEB_DIR = path.join(__dirname, "../src");
const WEB_SRC_DIR = WEB_DIR;
const WEB_ASSETS_DIR = path.join(WEB_DIR, "public/assets");
const WEB_ALIAS_COMMON_DIR = path.join(WEB_SRC_DIR, "common");
const DESTANATION_DIR = path.join(__dirname, '../build');
const PUBLIC_SRC_DIR = path.join(WEB_SRC_DIR, 'public')
const PUBLIC_ASSETS_DIR = path.join(PUBLIC_SRC_DIR, 'assets');
const ROOT = path.join(__dirname, "..");

module.exports = {
  WEB_DIR, 
  WEB_SRC_DIR, 
  PUBLIC_SRC_DIR,
  WEB_ASSETS_DIR,
  PUBLIC_ASSETS_DIR,
  DESTANATION_DIR,
  WEB_ALIAS_COMMON_DIR,
  ROOT
};