import { defineComponent, ExtractPropTypes, Transition } from 'vue';

import { createNamespace, makeArrayProp, truthProp } from '../utils';

const [name, bem] = createNamespace('floating-panel');

export const floatingPanelProps = {
  anchors: makeArrayProp<number>(),
  handleDraggingOfContent: truthProp,
};

export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

export default defineComponent({
  name,

  emits: ['onHeightChange'],

  props: floatingPanelProps,

  setup(props, { slots }) {
    return () => {
      return (
        <div class={bem()}>
          <div class={bem('mask')} />
          <div class={bem('header')}>
            <div class={bem('bar')} />
          </div>
          <div class={bem('content')}>{slots.default?.()}</div>
        </div>
      );
    };
  },
});
