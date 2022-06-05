import { newE2EPage } from '@stencil/core/testing';

describe('x-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-header></x-header>');

    const element = await page.find('x-header');
    expect(element).toHaveClass('hydrated');
  });
});
