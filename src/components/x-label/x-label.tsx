import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";

const ERROR_STRINGS = {
  REQUIRED: "This field cannot be left empty"
};

@Component({
  tag: "x-label",
  styleUrl: "x-label.scss",
  shadow: false
})
export class XLabel {
  @Element() el: HTMLElement;
  @Prop() text: string;
  @Prop() name: string;
  @Prop() showerrors: boolean = false;
  @State() errors: string[] = [];

  get input() {
    return this.el.querySelector("x-input-text");
  }

  @Watch("showerrors")
  showerrorsWatcher(showerrors: boolean) {
    const input = this.input;
    // @ts-ignore
    input.showerrors = showerrors;
  }

  async #populateErrors() {
    // @ts-ignore
    const validity = await this.input.getValidity();
    this.errors = [
      validity.valueMissing && ERROR_STRINGS.REQUIRED
    ].filter(Boolean);
  }

  componentWillLoad() {
    this.#populateErrors();
    this.input.addEventListener("input", async (e) => {
      // @ts-ignore
      if (e.target.matches("input")) {
        this.#populateErrors();
      }
    });
  }

  render() {
    return (
      <Host>
        <label>
          <div>{this.text}</div>
          <slot></slot>
          {this.showerrors && this.errors.map(error => (
            <div class="error-text">⨯ {error}</div>
          ))}
        </label>
      </Host>
    );
  }

}
