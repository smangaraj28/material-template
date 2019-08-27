import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Item} from './item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  formGroup: FormGroup;
  item: Item;

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.item = {
      itemType: null,
      itemName: null,
      itemSKU: null,
      itemUnit: null,
      itemDimension: null,
      itemWeight: null,
      itemManufacturer: null,
      itemBrand: null,
      itemUPC: null,
      itemMPN: null,
      itemEAN: null,
      itemISBN: null,
      itemSalePrice: null,
      itemSaleAccount: null,
      itemSaleDescr: null,
      itemPurchasePrice: null,
      itemPurchaseAccount: null,
      itemPurchaseDescr: null,
      itemGroupFlag: null,
      itemCompositeFlag: null
    };
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          itemTypeFormControl: ['', Validators.required],
          itemNameFormControl: ['', Validators.required],
          itemSKUFormControl: ['', Validators.required],
          itemUnitFormControl: ['', Validators.required]
        }),
        this.formBuilder.group({
          itemDimensionFormControl: ['', Validators.required],
          itemWeightFormControl: ['', Validators.required],
          itemManufacturerFormControl: ['', Validators.required],
          itemBrandFormControl: ['', Validators.required],
          itemUPCFormControl: ['', Validators.required],
          itemMPNFormControl: ['', Validators.required],
          itemEANFormControl: ['', Validators.required],
          itemISBNFormControl: ['', Validators.required]
          // emailFormCtrl: ['', Validators.compose([Validators.email])]
        }),
        this.formBuilder.group({
          itemSalePriceFormControl: ['', Validators.required],
          itemSaleAccountFormControl: ['', Validators.required],
          itemSaleDescrFormControl: ['', Validators.required]
        }),
        this.formBuilder.group({
          itemPurchasePriceFormControl: ['', Validators.required],
          itemPurchaseAccountFormControl: ['', Validators.required],
          itemPurchaseDescrFormControl: ['', Validators.required]
        }),
        this.formBuilder.group({
          itemGroupFlagFormControl: ['', Validators.required],
          itemCompositeFlagFormControl: ['', Validators.required]
        })
      ])
    });
  }
}
