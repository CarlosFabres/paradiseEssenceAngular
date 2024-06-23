import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1. Verificar que el carrito de compras está vacío
  it('should have empty cart', () => {
    expect(component.cart.length).toBe(0);
  });

  // 2. Verificar que el carrito de compras se muestra/oculta
  it('should toggle the cart display', () => {
    expect(component.showCart).toBeFalse();
    component.toggleCart();
    expect(component.showCart).toBeTrue();
    component.toggleCart();
    expect(component.showCart).toBeFalse();
  });

  // 3. Verificar que se puede añadir un producto al carrito
  it('should add a product to the cart', () => {
    const product = component.products[0];
    component.addToCart(product);
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].product).toEqual(product);
    expect(component.cart[0].quantity).toBe(1);
  });

  // 4. Verificar que el filtro por precio funciona correctamente
  it('should filter products by price', () => {
    component.priceFilter = '0-30000';
    component.applyFilters();
    expect(component.filteredProducts.length).toBeGreaterThan(0);
    component.filteredProducts.forEach(product => {
      expect(product.price).toBeLessThanOrEqual(30000);
    });
  });

});
