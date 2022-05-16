#! /bin/bash

# package name
NAME=$1

# project dirname
DIR_PATH=$(pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc-pkg \${name} with no space"
  exit 1
fi

# package dirname
DIR_NAME="$DIR_PATH/packages/$NAME"

if [ -d "$DIR_NAME" ]; then
  echo "$NAME already exists, please change it"
  exit 1
fi

# name to upper
# NORMALIZED_NAME=""
# for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
#   C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
#   NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
# done
# NAME=$NORMALIZED_NAME

# created folder
mkdir -p "$DIR_NAME"

# writed index.ts
cat > $DIR_NAME/index.ts <<EOF
export default () => {
  console.log('$NAME');
};
EOF

# writed package.json
cat > $DIR_NAME/package.json <<EOF
{
  "name": "@admin/$NAME",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

EOF

