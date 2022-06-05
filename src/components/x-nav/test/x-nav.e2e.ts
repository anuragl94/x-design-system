import { newE2EPage } from '@stencil/core/testing';

describe('x-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-nav></x-nav>');

    const element = await page.find('x-nav');
    expect(element).toHaveClass('hydrated');
  });
});
