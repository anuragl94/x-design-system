import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core";
import { serializeForm } from "../../utils/utils";

@Component({
  tag: "x-form",
  styleUrl: "x-form.scss"
})
export class XForm {
  @Element() el: HTMLElement;
  @Event() submit: EventEmitter<any>;
  @Prop() submitting: boolean = false;
  @Prop() submitlabel: string = "Submit";
  @Prop() showerrors: boolean = false;

  @Method()
  async serialize() {
    const data = serializeForm(this.el.querySelector("form"));
    return data;
  }

  @Watch("showerrors")
  showerrorsWatcher(showerrors: boolean) {
    Array.prototype.slice.call(this.el.querySelectorAll("x-label")).forEach(label => {
      label.showerrors = showerrors;
    });
  }

  async #submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    const isFormValid = (await Promise.all(
      Array.prototype.slice.call(document.querySelectorAll("x-input-text")).map(element => element.getValidity())
    )).reduce((acc, validity) => acc && validity.valid, true);

    if (isFormValid) {
      this.submit.emit(e);
    } else {
      console.log("Form invalidated");
      this.showerrorsWatcher(true);
    }
  }

  render() {
    return (
      <Host inert={this.submitting}>
        <form onSubmit={e => this.#submitHandler(e)} novalidate>
          <div class="form-section">
            <slot></slot>
          </div>
          <div class="form-section">
            <x-button type="submit" submitting={this.submitting}>{this.submitlabel}</x-button>
          </div>
        </form>
      </Host>
    );
  }

}
