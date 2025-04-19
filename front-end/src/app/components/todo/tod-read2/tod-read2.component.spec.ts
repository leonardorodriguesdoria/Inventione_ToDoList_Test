import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TodRead2Component } from './tod-read2.component';

describe('TodRead2Component', () => {
  let component: TodRead2Component;
  let fixture: ComponentFixture<TodRead2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodRead2Component],
      imports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodRead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
