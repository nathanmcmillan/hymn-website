#!/bin/bash -eu

rm css/*

cat template/dark.min.css template/style.css > css/dark.css
cat template/light.min.css template/style.css > css/light.css

cp template/play.css css
