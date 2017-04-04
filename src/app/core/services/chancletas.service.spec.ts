import { TestBed, inject } from '@angular/core/testing';

import { ChancletasService } from './chancletas.service';

describe('ChancletasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChancletasService]
    });
  });

  it('should ...', inject([ChancletasService], (service: ChancletasService) => {
    expect(service).toBeTruthy();
  }));
});
