import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntityComponent } from './todo-entity.component';

describe('TodoEntityComponent', () => {
  let component: TodoEntityComponent;
  let fixture: ComponentFixture<TodoEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
