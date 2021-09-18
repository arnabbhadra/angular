import { LimitedProductDirective } from './limited-product.directive';

describe('LimitedProductDirective', () => {
  let e: any;
  it('should create an instance', () => {
    const directive = new LimitedProductDirective(e);
    expect(directive).toBeTruthy();
  });
});
