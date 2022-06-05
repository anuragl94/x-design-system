import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "x-nav",
  styleUrl: "x-nav.scss",
})
export class XNav {
  @Prop() mode: "text" | "icons" = "text";

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
