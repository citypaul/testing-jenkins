#!/usr/bin/env bash
echo "installing npm modules"
rm -rf node_modules && npm install

echo "Running jasmine node tests"

node_modules/jasmine-node/bin/jasmine-node --junitreport test/

echo "Running jshint"
./node_modules/grunt-cli/bin/grunt hint

echo "Running jscs"
./node_modules/jscs/bin/jscs test/ src/js/