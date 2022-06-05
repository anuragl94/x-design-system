import { newSpecPage } from '@stencil/core/testing';
import { XInputText } from '../x-input-text';

describe('x-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XInputText],
      html: `<x-input-text></x-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <x-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-input-text>
    `);
  });
});
