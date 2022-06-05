import { newE2EPage } from '@stencil/core/testing';

describe('x-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-loader></x-loader>');

    const element = await page.find('x-loader');
    expect(element).toHaveClass('hydrated');
  });
});
