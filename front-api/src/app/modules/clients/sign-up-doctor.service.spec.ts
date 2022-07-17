/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignUpDoctorService } from './sign-up-doctor.service';

describe('Service: SignUpDoctor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpDoctorService]
    });
  });

  it('should ...', inject([SignUpDoctorService], (service: SignUpDoctorService) => {
    expect(service).toBeTruthy();
  }));
});
