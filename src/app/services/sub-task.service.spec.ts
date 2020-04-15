import { TestBed } from '@angular/core/testing';

import { SubTaskService } from './sub-task.service';

describe('SubTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubTaskService = TestBed.get(SubTaskService);
    expect(service).toBeTruthy();
  });
});
