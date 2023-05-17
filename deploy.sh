#!/usr/bin/env sh

set -e

# build
yarn build:docs

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'docs: update docs.'

git push -f git@github.com:snowycn324/cera-ui.git master:gh-pages

cd -