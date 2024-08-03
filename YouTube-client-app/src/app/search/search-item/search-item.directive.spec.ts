import { ElementRef } from '@angular/core';

import { SearchItemDirective } from './search-item.directive';

describe('SearchItemDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const directive = new SearchItemDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
