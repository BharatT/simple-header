import { TestBed, async, inject } from '@angular/core/testing';

import { UnSavedChangesGuard } from './un-saved-changes.guard';

describe('UnSavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnSavedChangesGuard]
    });
  });

  it('should ...', inject([UnSavedChangesGuard], (guard: UnSavedChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
