import { newE2EPage } from '@stencil/core/testing';

describe('x-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-input-text></x-input-text>');

    const element = await page.find('x-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
