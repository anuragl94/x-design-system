import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "x-page",
  styleUrl: "x-page.scss",
})
export class XPage {

  render() {
    return (
      <Host>
        <div class="page-content">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
