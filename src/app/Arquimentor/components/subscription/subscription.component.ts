import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/article";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit{
  articles: Article[] = [];
  subscriptions = [
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158205033685052/free.png?ex=6554626d&is=6541ed6d&hm=a5d8de822931ba4152c1ce129c7e58280c68aef32cccb35bba6b8bcce726def0&=&width=1118&height=671',
      name: 'Free',
      price: '0.00',
      description: 'The Free plan is perfect for those who want to try our services for free. With this plan, you\'ll get basic access to our essential features at no cost. Start exploring and discover what we have to offer without obligation!',
      hasButtons: false
    },
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158202563239976/basic.png?ex=6554626d&is=6541ed6d&hm=81199692d6611d6294eeaeeb25b3156c875b275a38f6793c495fb16ae0e7308e&=&width=1118&height=671',
      name: 'Basic',
      price: '9.99',
      description: 'Our Basic plan is an excellent option for those looking for a more complete experience. With access to additional features and exclusive content, the Basic plan gives you the opportunity to make the most of our services at an affordable price.',
      hasButtons: true
    },
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158209223790612/prime.png?ex=6554626e&is=6541ed6e&hm=61b3901a8abf51b57507fbacaeb1a533b9e44f2d28cdec7f28c0bb6b22841b59&=&width=1118&height=671',
      name: 'Prime',
      price: '19.99',
      description: 'The Prime plan is the top tier of our subscriptions. With full access to all premium features, exclusive content, and additional benefits, the Prime plan is perfect for those who want a premium, personalized experience with us. Enjoy all the advantages we have reserved for you.',
      hasButtons: true
    }
  ];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {this.cargarLista();
  }
  cargarLista(): void {
    this.articleService.list().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
