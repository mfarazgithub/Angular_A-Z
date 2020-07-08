import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Bang Recipe", "Bang description", 
        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/fillet-steak-972171c1.jpg'),
        new Recipe("Dabang Recipe", "Dabang description", 
        'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/restaurants/osia-steak-and-seafood-grill/osia-steak--seafood-grill-beef-steak-1366x666.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=70CF567FEAF4823EB48D8AA2F2738B0475A802AB')
      ];

    getRecipes()
    {
        return this.recipes.slice();
    }
}