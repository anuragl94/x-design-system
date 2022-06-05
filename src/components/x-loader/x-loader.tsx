import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "x-loader",
  styleUrl: "x-loader.scss",
})
export class XLoader {

  render() {
    return (
      <Host>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Host>
    );
  }

}
