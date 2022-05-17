import { mount } from '@vue/test-utils';
import Button from '../src/index.vue';
import { describe, expect, test } from 'vitest';

const AXIOM = 'Rem is the best girl';

describe('Button.vue', () => {
  test('render test', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM
      }
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
