import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../model/article';
import { ArticleService} from "../../services/article.service";

@Component({
    selector: 'app-detail-article',
    templateUrl: './detail-article.component.html',
    styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
    article: Article = { id: 0, name: '', description: '', price: 0 , imageURL: '' };

    constructor(
        private articleService: ArticleService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.chargeArticle();
    }

    chargeArticle(): void {
        const id = Number(this.activatedRoute.snapshot.params['id'])
        this.articleService.detail(id).subscribe(
            (data) => {
                this.article = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }


}
