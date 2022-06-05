import { newSpecPage } from '@stencil/core/testing';
import { XPage } from '../x-page';

describe('x-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XPage],
      html: `<x-page></x-page>`,
    });
    expect(page.root).toEqualHtml(`
      <x-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-page>
    `);
  });
});
