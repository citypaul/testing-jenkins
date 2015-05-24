#!/usr/bin/env bash
rm -rf node_modules
npm cache clean
npm install
./node_modules/karma/bin/karma start
./node_modules/grunt-cli/bin/grunt hint