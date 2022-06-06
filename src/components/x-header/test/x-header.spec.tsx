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
        <header></header>
      </x-header>
    `);
  });
});
