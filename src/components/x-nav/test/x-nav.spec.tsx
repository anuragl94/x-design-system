import { newSpecPage } from '@stencil/core/testing';
import { XNav } from '../x-nav';

describe('x-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XNav],
      html: `<x-nav></x-nav>`,
    });
    expect(page.root).toEqualHtml(
      `<x-nav>
      </x-nav>`
    );
  });
});
