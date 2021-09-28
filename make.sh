#!/bin/bash -eu

rm -f *.html

rm -rf dark

mkdir dark

cp -r html/* .
cp -r html/* dark

./make.py

./css-make.sh
