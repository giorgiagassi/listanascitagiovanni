export interface CatalogItem {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly category: 'Nanna' | 'Bagnetto' | 'Pappa' | 'Passeggio' | 'Cura' | 'Gioco' | 'Accessori';
  readonly featured?: boolean;
  available?: boolean;
}

export const CATALOG_ITEMS: readonly CatalogItem[] = [
  {
    id: 1,
    title: 'Welcome Pod Quiet Beige - Inglesina',
    description: 'Morbido riduttore/nido per il riposo del neonato, colore quiet beige, pratico e avvolgente.',
    price: 99,
    image: 'assets/catalogo/welcome-pod.jpg',
    category: 'Nanna',
    featured: true,
    available: false
  },
  {
    id: 2,
    title: 'Materassino Fasciatoio Glenn Alondra',
    description: 'Fasciatoio 50x70 in silicone ergonomico con schiuma, comodo per il cambio quotidiano.',
    price: 79.90,
    image: 'assets/catalogo/fasciatoio.jpg',
    category: 'Cura'
  },
  {
    id: 3,
    title: 'Stokke® Flexi Bath® XL Celeste + Riduttore',
    description: 'Vaschetta pieghevole formato XL con riduttore, ideale dalla nascita e facile da riporre.',
    price: 69,
    image: 'assets/catalogo/stokke-flexi-bath.jpg',
    category: 'Bagnetto',
    available: false
  },
  {
    id: 4,
    title: 'Supporto Stokke® Flexi Bath',
    description: 'Supporto stabile e leggero per usare la vaschetta Stokke a un’altezza più comoda.',
    price: 69,
    image: 'assets/catalogo/supporto-stokke.jpg',
    category: 'Bagnetto',
    available: false
  },
  {
    id: 5,
    title: 'Cybex Gold Seggiolone Lemo 4 in 1',
    description: 'Seggiolone evolutivo 4 in 1, moderno e regolabile, pensato per accompagnare la crescita.',
    price: 395,
    image: 'assets/catalogo/seggiolone-lemo.jpg',
    category: 'Pappa',
    featured: true
  },
  {
    id: 6,
    title: 'Foppapedretti Circle I-Size Cool Carbon',
    description: 'Seggiolino auto i-Size in colorazione cool carbon, sicuro, confortevole e avvolgente.',
    price: 199,
    image: 'assets/catalogo/seggiolino-auto.jpg',
    category: 'Passeggio',
    available: false
  },
  {
    id: 7,
    title: 'Nuvita 1130 Tagliaunghie Trimmy',
    description: 'Lima elettrica per unghie di neonati e bambini, delicata e pratica per la cura quotidiana.',
    price: 19.90,
    image: 'assets/catalogo/tagliaunghie.jpg',
    category: 'Cura'
  },
  {
    id: 8,
    title: 'Foppapedretti Mangiapannolini Missk',
    description: 'Contenitore mangiapannolini compatto e igienico, utile per mantenere ordinata la cameretta.',
    price: 39.90,
    image: 'assets/catalogo/mangiapannolini.jpg',
    category: 'Cura'
  },
  {
    id: 9,
    title: 'Set Pappa Chicco 6m+ Azzurro',
    description: 'Set pappa azzurro con piatto, bicchiere e posatine, pensato per lo svezzamento dai 6 mesi.',
    price: 32.90,
    image: 'assets/catalogo/set-pappa.jpg',
    category: 'Pappa'
  },
  {
    id: 10,
    title: 'Borsa Mamma con Fasciatoio Pretty Ebony',
    description: 'Borsa capiente e organizzata con fasciatoio, ideale per uscite, passeggiate e viaggi.',
    price: 99,
    image: 'assets/catalogo/borsa-mamma.jpg',
    category: 'Accessori'
  },
  {
    id: 11,
    title: 'Zanzariera Navicella Bianca',
    description: 'Zanzariera bianca leggera per proteggere la navicella durante le passeggiate.',
    price: 14.90,
    image: 'assets/catalogo/zanzariera.jpg',
    category: 'Accessori'
  },
  {
    id: 12,
    title: 'Palestrina Enjoy Gym Chicco Beige',
    description: 'Palestrina morbida con giochi sospesi, luci e stimoli sensoriali per i primi mesi.',
    price: 54,
    image: 'assets/catalogo/palestrina.jpg',
    category: 'Gioco'
  },
  {
    id: 13,
    title: 'Maxi Tappeto 2 in 1 Chicco',
    description: 'Tappeto gioco pieghevole 2 in 1, ampio e colorato, ideale per il tummy time e il gioco a terra.',
    price: 43,
    image: 'assets/catalogo/tappeto-chicco.jpg',
    category: 'Gioco'
  },
  {
    id: 14,
    title: 'Aspiratore Nasale Elettrico Nuvita',
    description: 'Aspiratore nasale elettrico con batteria ricaricabile, pratico per l’igiene respiratoria.',
    price: 35,
    image: 'assets/catalogo/aspiratore-nasale.jpg',
    category: 'Cura'
  },
  {
    id: 15,
    title: 'CHICCO Trio Bellagio Black Satin',
    description: 'Trio Bellagio con borsa e stand Lullaglide, completo per passeggino, navicella e auto.',
    price: 649,
    image: 'assets/catalogo/trio-bellagio.jpg',
    category: 'Passeggio',
    featured: true,
    available: false
  },
  {
    id: 16,
    title: 'Lettino Forever 8 in 1 Brevi',
    description: 'Lettino evolutivo bianco e naturale con tessile beige, trasformabile in diverse configurazioni.',
    price: 399,
    image: 'assets/catalogo/lettino-forever.jpg',
    category: 'Nanna',
    featured: true
  }
];
