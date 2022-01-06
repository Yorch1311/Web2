import { TestBed } from '@angular/core/testing';

import { ApiMercadoService } from './api-mercado.service';

describe('ApiMercadoService', () => {
  let service: ApiMercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
