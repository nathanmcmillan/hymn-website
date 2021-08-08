#!/bin/bash -eu

css='css'

rm -rf $css

mkdir $css

cp template/dark.css $css/dark.css
cp template/light.css $css/light.css

echo "" >> $css/dark.css
echo "" >> $css/light.css

cat template/common.css >> $css/dark.css
cat template/common.css >> $css/light.css
