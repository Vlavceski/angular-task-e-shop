import { Component } from '@angular/core';
import { VendureService } from '../vendure.service';
import { Store } from '@ngrx/store';
import { selectFilterText, selectSortOption } from '../ngrx/sort-filter.selectors';
import { setFilterText, setSortOption } from '../ngrx/sort-filter.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  sortOptions: string[] = ['Name (A-Z)', 'Name (Z-A)'];
  selectedSortOption: string = 'Name (A-Z)';
  filterText: string = '';

  constructor(
    private vendureService: VendureService,
    private store: Store
  ) { }

  ngOnInit(): void {
    
    this.vendureService.getProducts().subscribe((result: any) => {
      this.products = result.data.products.items;
      this.filteredProducts = this.products;
    });
    
    this.store.select(selectSortOption).subscribe((sortOption) => {
      this.selectedSortOption = sortOption || 'Name (A-Z)';
      this.applySort();
    });

    this.store.select(selectFilterText).subscribe((filterText) => {
      this.filterText = filterText || '';
      this.applyFilter();
    });


  }


  applySort(): void {
    this.store.dispatch(setSortOption({ sortOption: this.selectedSortOption }));

    this.filteredProducts = [...this.products];

    switch (this.selectedSortOption) {
      case 'Name (A-Z)':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Name (Z-A)':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

  }

  applyFilter(): void {
    this.store.dispatch(setFilterText({ filterText: this.filterText }));

    if (this.filterText) {
      this.filteredProducts = this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.filterText.toLowerCase());
      });
    } else {
      this.filteredProducts = this.products;
    }
  }


}
