import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NewsDigestItemComponent } from "./news-digest-item.component";

describe("NewsDigestItemComponent", () => {
  let component: NewsDigestItemComponent;
  let fixture: ComponentFixture<NewsDigestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsDigestItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDigestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
