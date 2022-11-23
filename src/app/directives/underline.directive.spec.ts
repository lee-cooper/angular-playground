import { ElementRef } from '@angular/core';
import { UnderlineDirective } from './underline.directive';

const mockElementRef = {} as ElementRef;

describe('UnderlineDirective', () => {
  it('should create an instance', () => {
    const directive = new UnderlineDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
