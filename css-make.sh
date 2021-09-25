#!/bin/bash -eu

css='css'

rm -rf "$css"

mkdir "$css"

cp template/dark.min.css $css/dark.css
cp template/light.min.css $css/light.css

echo "" >> $css/dark.css
echo "" >> $css/light.css

cat template/style.css >> $css/dark.css
cat template/style.css >> $css/light.css

cp template/play.css $css
