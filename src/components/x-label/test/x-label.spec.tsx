import { newSpecPage } from '@stencil/core/testing';
import { XLabel } from '../x-label';
import { XInputText } from '../../x-input-text/x-input-text';

describe('x-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XInputText, XLabel],
      html: `<x-label><x-input-text /></x-label>`,
    });
    expect(page.root).toEqualHtml(`
      <x-label>
        <div></div>
        <x-input-text>
          <input type="text">
        </x-input-text>
      </x-label>
    `);
  });
});
