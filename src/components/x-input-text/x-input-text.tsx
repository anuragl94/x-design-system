import { Component, Element, h, Method, Prop } from "@stencil/core";

@Component({
  tag: "x-input-text",
  styleUrl: "x-input-text.scss",
  shadow: false
})
export class XInputText {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() value: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() minlength: number;
  @Prop() maxlength: number;
  @Prop() pattern: string;

  @Method()
  async getValidity() {
    return this.el.querySelector("input").validity;
  }

  render() {
    return (
      <input
        type="text"
        name={this.name}
        value={this.value}
        aria-label={this.name}
        placeholder={this.placeholder || this.name}
        /* validations */
        required={this.required}
        minlength={!isNaN(this.minlength) ? String(this.minlength) : null}
        maxlength={!isNaN(this.maxlength) ? String(this.maxlength) : null}
        pattern={this.pattern}
      />
    );
  }

}
