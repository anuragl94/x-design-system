import { newSpecPage } from '@stencil/core/testing';
import { XLabel } from '../x-label';

describe('x-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XLabel],
      html: `<x-label></x-label>`,
    });
    expect(page.root).toEqualHtml(`
      <x-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-label>
    `);
  });
});
