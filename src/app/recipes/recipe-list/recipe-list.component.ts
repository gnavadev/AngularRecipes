import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/steak-n-shake-7x7-steakburger.jpg?quality=82&strip=1&w=640')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
