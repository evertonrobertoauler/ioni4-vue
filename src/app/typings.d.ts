/// <reference path="../../node_modules/@ionic/core/dist/collection/components.d.ts" />

import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode { }
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface HTMLAttributes {
    [elem: string]: any;
  }
}
