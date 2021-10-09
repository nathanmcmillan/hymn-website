#!/bin/bash -eu

rm -rf css/*

cat template/light.min.css template/style.css > css/index.css
cat template/play.light.min.css template/play.css > css/play.css

rm -rf dark/css/*

cat template/dark.min.css template/style.css > dark/css/index.css
cat template/play.dark.min.css template/play.css > dark/css/play.css
