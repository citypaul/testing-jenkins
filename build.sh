#!/usr/bin/env bash
rm -rf node_modules && npm install

node_modules/jasmine-node/bin/jasmine-node --junitreport test/
./node_modules/grunt-cli/bin/grunt hint
./node_modules/jscs/bin/jscs test/ src/js/