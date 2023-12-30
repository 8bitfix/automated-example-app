import { TestBed } from '@angular/core/testing';

import { CmsRequestInterceptor } from './cms-request.interceptor';

describe('CmsRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CmsRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CmsRequestInterceptor = TestBed.inject(CmsRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
