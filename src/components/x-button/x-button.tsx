import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "x-button",
  styleUrl: "x-button.scss"
})
export class XButton {
  @Prop() submitting: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() type: "submit" | "reset" | "button" = "button";

  render() {
    return (
      <Host inert={this.disabled || this.submitting}>
        <button type={this.type}>
          <span class={this.submitting ? "invisible" : null}>
            <slot></slot>
          </span>
          {this.submitting ? (
            <x-loader />
          ) : null}
        </button>
      </Host>
    );
  }

}
