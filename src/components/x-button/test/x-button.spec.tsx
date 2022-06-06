import { newSpecPage } from '@stencil/core/testing';
import { XButton } from '../x-button';

describe('x-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XButton],
      html: `<x-button></x-button>`,
    });
    expect(page.root).toEqualHtml(`
      <x-button>
        <button type="button">
          <span></span>
        </button>
      </x-button>
    `);
  });
});
