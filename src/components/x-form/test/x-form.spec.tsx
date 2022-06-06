import { newSpecPage } from '@stencil/core/testing';
import { XForm } from '../x-form';

describe('x-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XForm],
      html: `<x-form></x-form>`,
    });
    expect(page.root).toEqualHtml(`
      <x-form>
        <form novalidate="">
          <div class="form-section"></div>
          <div class="form-section">
            <x-button type="submit">
              Submit
            </x-button>
          </div>
        </form>
      </x-form>
    `);
  });
});
