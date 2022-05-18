import { mount } from '@vue/test-utils';
import Text from '../src/index.vue';
import { describe, expect, test } from 'vitest';

const AXIOM = 'Rem is the best girl';

describe('Text.vue', () => {
  test('render test', () => {
    const wrapper = mount(Text, {
      slots: {
        default: AXIOM
      }
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
