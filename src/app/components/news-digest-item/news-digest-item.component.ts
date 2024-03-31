import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { Digest } from "src/app/models/digest.model";

@Component({
  selector: "app-news-digest-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-digest-item.component.html",
  styleUrl: "./news-digest-item.component.scss",
})
export class NewsDigestItemComponent {
  @Input() digest!: Digest;
}
