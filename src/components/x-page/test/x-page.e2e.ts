import { newE2EPage } from '@stencil/core/testing';

describe('x-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-page></x-page>');

    const element = await page.find('x-page');
    expect(element).toHaveClass('hydrated');
  });
});
