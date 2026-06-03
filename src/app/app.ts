import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CATALOG_ITEMS, CatalogItem} from './catalogo.data';
import {CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

type CategoryFilter = CatalogItem['category'] | 'Tutti';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('giovanni');
  protected readonly items = CATALOG_ITEMS;
  protected readonly searchTerm = signal('');
  protected readonly selectedCategory = signal<CategoryFilter>('Tutti');
  protected readonly selectedItem = signal<CatalogItem | null>(null);
  protected readonly coverImage = 'assets/catalogo/copertina.jpeg';
  readonly shopPhoneNumber = '393760668716';

  protected readonly categories = computed<readonly CategoryFilter[]>(() => {
    const uniqueCategories = new Set<CatalogItem['category']>(this.items.map((item) => item.category));
    return ['Tutti', ...Array.from(uniqueCategories).sort()];
  });

  protected readonly filteredItems = computed<readonly CatalogItem[]>(() => {
    const term = this.normalize(this.searchTerm());
    const category = this.selectedCategory();

    return this.items.filter((item) => {
      const matchesCategory = category === 'Tutti' || item.category === category;
      const matchesText = !term || this.normalize(`${item.title} ${item.description} ${item.category}`).includes(term);
      return matchesCategory && matchesText;
    });
  });

  protected readonly totalValue = computed<number>(() => this.items.reduce((total, item) => total + item.price, 0));

  protected updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  protected selectCategory(category: CategoryFilter): void {
    this.selectedCategory.set(category);
  }

  protected openItem(item: CatalogItem): void {
    this.selectedItem.set(item);
    document.body.classList.add('modal-open');
  }

  protected closeItem(): void {
    this.selectedItem.set(null);
    document.body.classList.remove('modal-open');
  }

  protected trackById(_: number, item: CatalogItem): number {
    return item.id;
  }

  protected getWhatsappText(item: CatalogItem): string {
    return encodeURIComponent(`Ciao, vorrei informazioni per la lista nascita di Giovanni sul prodotto: ${item.title} - ${this.formatPrice(item.price)}.`);
  }

  private normalize(value: string): string {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }

  private formatPrice(value: number): string {
    return new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR'}).format(value);
  }
  readonly generalWhatsappUrl = this.buildWhatsappUrl(
    'Vorrei avere info per un prodotto della lista nascita di Lorenzo Divittorio e Giorgia Gassi.'
  );

  private buildWhatsappUrl(message: string): string {
    return `https://wa.me/${this.shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  }

  getProductWhatsappUrl(item: CatalogItem): string {
    const message = `Vorrei avere info per il prodotto "${item.title}" della lista nascita di Lorenzo Divittorio e Giorgia Gassi.`;
    return this.buildWhatsappUrl(message);
  }
}
