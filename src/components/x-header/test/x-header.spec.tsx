import { newSpecPage } from '@stencil/core/testing';
import { XHeader } from '../x-header';

describe('x-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XHeader],
      html: `<x-header></x-header>`,
    });
    expect(page.root).toEqualHtml(`
      <x-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-header>
    `);
  });
});
