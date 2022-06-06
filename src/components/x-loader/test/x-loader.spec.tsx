import { newSpecPage } from '@stencil/core/testing';
import { XLoader } from '../x-loader';

describe('x-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XLoader],
      html: `<x-loader></x-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <x-loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </x-loader>
    `);
  });
});
