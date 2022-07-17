import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRouterComponent } from './article-router.component';

describe('ArticleRouterComponent', () => {
  let component: ArticleRouterComponent;
  let fixture: ComponentFixture<ArticleRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
