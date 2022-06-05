import { Component, Host, h } from '@stencil/core';

@Component({
  tag: "x-header",
  styleUrl: "x-header.scss"
})
export class XHeader {

  render() {
    return (
      <Host>
        <header>
          <slot></slot>
        </header>
      </Host>
    );
  }

}
