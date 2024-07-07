import { SearchItemDirective } from './search-item.directive';
import { ElementRef } from '@angular/core';

describe('SearchItemDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const directive = new SearchItemDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
