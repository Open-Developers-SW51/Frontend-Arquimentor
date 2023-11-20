import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Router} from "@angular/router";
import {Article} from "../../model/article";

@Component({
  selector: 'app-subscription-content',
  templateUrl: './subscription-content.component.html',
  styleUrls: ['./subscription-content.component.css']
})
export class SubscriptionContentComponent {
  articles: Article[] = [];
  constructor(private articleService: ArticleService, private router: Router ) { }
  ngOnInit(): void {
    this.chargeList();
  }
  chargeList(): void {
    this.articleService.list().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  selectPlan(planId: number): void {

    this.router.navigate(['/detail', planId]);
  }
}
