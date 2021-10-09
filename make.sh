#!/bin/bash -eu

rm -f *.html

rm -rf dark

mkdir dark
mkdir dark/css

cp -r html/* .
cp -r html/* dark

./make.py

./css-make.sh
