import { Component } from "@angular/core";

import { NewsDigestItemComponent } from "../news-digest-item/news-digest-item.component";

@Component({
  selector: "app-news-digest",
  standalone: true,
  imports: [NewsDigestItemComponent],
  templateUrl: "./news-digest.component.html",
  styleUrl: "./news-digest.component.scss",
})
export class NewsDigestComponent {}
