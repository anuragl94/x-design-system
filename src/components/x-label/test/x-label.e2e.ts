import { newE2EPage } from '@stencil/core/testing';

describe('x-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-label></x-label>');

    const element = await page.find('x-label');
    expect(element).toHaveClass('hydrated');
  });
});
