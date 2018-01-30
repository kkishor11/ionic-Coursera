import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DishProvider } from '../../providers/dish/dish';
import { LeaderProvider } from '../../providers/leader/leader';
import { PromotionProvider } from '../../providers/promotion/promotion';
import { Dish } from '../../shared/dish';
import { Leader } from '../../shared/leader';
import { Promotion } from '../../shared/promotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dish: Dish;
  leader: Leader;
  promo: Promotion;

  dishErrMsg: string;
  leaderErrMsg: string;
  promoErrMsg: string;

  constructor(public navCtrl: NavController,
    private dishService: DishProvider,
    private leaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @Inject('BaseURL') private baseURL) {

  }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
      errMsg => this.dishErrMsg = <any>errMsg
      );
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promo = promotion,
      errMsg => this.promoErrMsg = <any>errMsg
      );
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
      errMsg => this.leaderErrMsg = <any>errMsg
      );
  }

}
