import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicationContentComponent } from './card-publication-content.component';

describe('CardPublicationContentComponent', () => {
  let component: CardPublicationContentComponent;
  let fixture: ComponentFixture<CardPublicationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPublicationContentComponent]
    });
    fixture = TestBed.createComponent(CardPublicationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
