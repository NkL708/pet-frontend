import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "src/app/services/api.service";

import { Digest } from "src/app/models/digest.model";

import { NewsDigestItemComponent } from "../news-digest-item/news-digest-item.component";

@Component({
  selector: "app-news-digest",
  standalone: true,
  imports: [CommonModule, NewsDigestItemComponent],
  templateUrl: "./news-digest.component.html",
  styleUrl: "./news-digest.component.scss",
})
export class NewsDigestComponent implements OnInit {
  digests: Digest[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDigests().subscribe((data: Digest[]) => {
      this.digests = data;
    });
  }
}
