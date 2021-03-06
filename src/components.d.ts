/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XButton {
        "disabled": boolean;
        "submitting": boolean;
        "type": "submit" | "reset" | "button";
    }
    interface XForm {
        "serialize": () => Promise<{}>;
        "showerrors": boolean;
        "submitlabel": string;
        "submitting": boolean;
    }
    interface XHeader {
    }
    interface XInputText {
        "getValidity": () => Promise<ValidityState>;
        "maxlength": number;
        "minlength": number;
        "name": string;
        "pattern": string;
        "placeholder": string;
        "required": boolean;
        "value": string;
    }
    interface XLabel {
        "name": string;
        "showerrors": boolean;
        "text": string;
    }
    interface XLoader {
    }
    interface XNav {
        "mode": "text" | "icons";
    }
    interface XPage {
    }
}
export interface XFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXFormElement;
}
declare global {
    interface HTMLXButtonElement extends Components.XButton, HTMLStencilElement {
    }
    var HTMLXButtonElement: {
        prototype: HTMLXButtonElement;
        new (): HTMLXButtonElement;
    };
    interface HTMLXFormElement extends Components.XForm, HTMLStencilElement {
    }
    var HTMLXFormElement: {
        prototype: HTMLXFormElement;
        new (): HTMLXFormElement;
    };
    interface HTMLXHeaderElement extends Components.XHeader, HTMLStencilElement {
    }
    var HTMLXHeaderElement: {
        prototype: HTMLXHeaderElement;
        new (): HTMLXHeaderElement;
    };
    interface HTMLXInputTextElement extends Components.XInputText, HTMLStencilElement {
    }
    var HTMLXInputTextElement: {
        prototype: HTMLXInputTextElement;
        new (): HTMLXInputTextElement;
    };
    interface HTMLXLabelElement extends Components.XLabel, HTMLStencilElement {
    }
    var HTMLXLabelElement: {
        prototype: HTMLXLabelElement;
        new (): HTMLXLabelElement;
    };
    interface HTMLXLoaderElement extends Components.XLoader, HTMLStencilElement {
    }
    var HTMLXLoaderElement: {
        prototype: HTMLXLoaderElement;
        new (): HTMLXLoaderElement;
    };
    interface HTMLXNavElement extends Components.XNav, HTMLStencilElement {
    }
    var HTMLXNavElement: {
        prototype: HTMLXNavElement;
        new (): HTMLXNavElement;
    };
    interface HTMLXPageElement extends Components.XPage, HTMLStencilElement {
    }
    var HTMLXPageElement: {
        prototype: HTMLXPageElement;
        new (): HTMLXPageElement;
    };
    interface HTMLElementTagNameMap {
        "x-button": HTMLXButtonElement;
        "x-form": HTMLXFormElement;
        "x-header": HTMLXHeaderElement;
        "x-input-text": HTMLXInputTextElement;
        "x-label": HTMLXLabelElement;
        "x-loader": HTMLXLoaderElement;
        "x-nav": HTMLXNavElement;
        "x-page": HTMLXPageElement;
    }
}
declare namespace LocalJSX {
    interface XButton {
        "disabled"?: boolean;
        "submitting"?: boolean;
        "type"?: "submit" | "reset" | "button";
    }
    interface XForm {
        "onSubmit"?: (event: XFormCustomEvent<any>) => void;
        "showerrors"?: boolean;
        "submitlabel"?: string;
        "submitting"?: boolean;
    }
    interface XHeader {
    }
    interface XInputText {
        "maxlength"?: number;
        "minlength"?: number;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "value"?: string;
    }
    interface XLabel {
        "name"?: string;
        "showerrors"?: boolean;
        "text"?: string;
    }
    interface XLoader {
    }
    interface XNav {
        "mode"?: "text" | "icons";
    }
    interface XPage {
    }
    interface IntrinsicElements {
        "x-button": XButton;
        "x-form": XForm;
        "x-header": XHeader;
        "x-input-text": XInputText;
        "x-label": XLabel;
        "x-loader": XLoader;
        "x-nav": XNav;
        "x-page": XPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "x-button": LocalJSX.XButton & JSXBase.HTMLAttributes<HTMLXButtonElement>;
            "x-form": LocalJSX.XForm & JSXBase.HTMLAttributes<HTMLXFormElement>;
            "x-header": LocalJSX.XHeader & JSXBase.HTMLAttributes<HTMLXHeaderElement>;
            "x-input-text": LocalJSX.XInputText & JSXBase.HTMLAttributes<HTMLXInputTextElement>;
            "x-label": LocalJSX.XLabel & JSXBase.HTMLAttributes<HTMLXLabelElement>;
            "x-loader": LocalJSX.XLoader & JSXBase.HTMLAttributes<HTMLXLoaderElement>;
            "x-nav": LocalJSX.XNav & JSXBase.HTMLAttributes<HTMLXNavElement>;
            "x-page": LocalJSX.XPage & JSXBase.HTMLAttributes<HTMLXPageElement>;
        }
    }
}
