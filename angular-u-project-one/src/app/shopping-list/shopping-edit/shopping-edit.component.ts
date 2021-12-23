import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private slService: ShoppingListService) { 
}

  ngOnInit(): void {
  }

  onAddClick()
  {
    this.slService.addIngredient(
      new Ingredient(this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value)
    );
  }
}
