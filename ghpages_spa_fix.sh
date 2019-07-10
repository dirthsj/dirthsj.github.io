#!/bin/bash
urls=($(grep -oP '(?<=loc>)[^<]+' "./dist/personal-website-seven/sitemap.xml"))

for i in ${!urls[*]}
do
  path=("./dist/personal-website-seven/${urls[i]##*/}")
  echo "Making path ${path}"
  mkdir "${path}"
  echo "Copying index.html"
  cp "./dist/personal-website-seven/index.html" "${path}/index.html"
done

