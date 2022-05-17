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

# components dirname
DIR_NAME="$DIR_PATH/packages/components/$NAME"

if [ -d "$DIR_NAME" ]; then
  echo "$NAME already exists, please change it"
  exit 1
fi

# name to upper
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

# created folder
mkdir -p "$DIR_NAME"
mkdir -p "$DIR_NAME/src"
mkdir -p "$DIR_NAME/__tests__"

cat > $DIR_NAME/src/index.vue <<EOF
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { clPrefixName } from '@admin-cl/constants';
export default defineComponent({
  name: clPrefixName + '$NORMALIZED_NAME'
});
</script>
<script lang="ts" setup></script>
<style></style>
EOF

cat <<EOF >"$DIR_NAME/index.ts"
import { App } from 'vue';
import $NORMALIZED_NAME from './src/index.vue';

$NORMALIZED_NAME.install = (app: App): void => {
  app.component($NORMALIZED_NAME.name, $NORMALIZED_NAME);
};

export default $NORMALIZED_NAME;
EOF

cat > $DIR_NAME/__tests__/$NAME.spec.ts <<EOF
import { mount } from '@vue/test-utils';
import $NORMALIZED_NAME from '../src/index.vue';
import { describe, expect, test } from 'vitest';

const AXIOM = 'Rem is the best girl';

describe('$NORMALIZED_NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM
      }
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
EOF



echo "🎉 Generate Success"