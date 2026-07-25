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
    description:
      'Morbido riduttore/nido per il riposo del neonato, colore quiet beige, pratico e avvolgente.',
    price: 99,
    image: 'assets/catalogo/welcome-pod.jpg',
    category: 'Nanna',
    featured: true,
    available: false,
  },
  {
    id: 2,
    title: 'Materassino Fasciatoio Glenn Alondra',
    description:
      'Fasciatoio 50x70 in silicone ergonomico con schiuma, comodo per il cambio quotidiano.',
    price: 79.9,
    image: 'assets/catalogo/fasciatoio.jpg',
    category: 'Cura',
  },
  {
    id: 3,
    title: 'Stokke® Flexi Bath® XL Celeste + Riduttore',
    description:
      'Vaschetta pieghevole formato XL con riduttore, ideale dalla nascita e facile da riporre.',
    price: 69,
    image: 'assets/catalogo/stokke-flexi-bath.jpg',
    category: 'Bagnetto',
    available: false,
  },
  {
    id: 4,
    title: 'Supporto Stokke® Flexi Bath',
    description:
      'Supporto stabile e leggero per usare la vaschetta Stokke a un’altezza più comoda.',
    price: 69,
    image: 'assets/catalogo/supporto-stokke.jpg',
    category: 'Bagnetto',
    available: false,
  },
  {
    id: 5,
    title: 'Cybex Gold Seggiolone Lemo 4 in 1',
    description:
      'Seggiolone evolutivo 4 in 1, moderno e regolabile, pensato per accompagnare la crescita.',
    price: 395,
    image: 'assets/catalogo/seggiolone-lemo.jpg',
    category: 'Pappa',
    featured: true,
    available: false,
  },
  {
    id: 6,
    title: 'Foppapedretti Circle I-Size Cool Carbon',
    description:
      'Seggiolino auto i-Size in colorazione cool carbon, sicuro, confortevole e avvolgente.',
    price: 199,
    image: 'assets/catalogo/seggiolino-auto.jpg',
    category: 'Passeggio',
    available: false,
  },
  {
    id: 7,
    title: 'Nuvita 1130 Tagliaunghie Trimmy',
    description:
      'Lima elettrica per unghie di neonati e bambini, delicata e pratica per la cura quotidiana.',
    price: 19.9,
    image: 'assets/catalogo/tagliaunghie.jpg',
    category: 'Cura',
  },
  {
    id: 8,
    title: 'Foppapedretti Mangiapannolini Missk',
    description:
      'Contenitore mangiapannolini compatto e igienico, utile per mantenere ordinata la cameretta.',
    price: 39.9,
    image: 'assets/catalogo/mangiapannolini.jpg',
    category: 'Cura',
  },
  {
    id: 9,
    title: 'Set Pappa Chicco 6m+ Azzurro',
    description:
      'Set pappa azzurro con piatto, bicchiere e posatine, pensato per lo svezzamento dai 6 mesi.',
    price: 32.9,
    image: 'assets/catalogo/set-pappa.jpg',
    category: 'Pappa',
  },
  {
    id: 10,
    title: 'Borsa Mamma con Fasciatoio Pretty Ebony',
    description:
      'Borsa capiente e organizzata con fasciatoio, ideale per uscite, passeggiate e viaggi.',
    price: 99,
    image: 'assets/catalogo/borsa-mamma.jpg',
    category: 'Accessori',
  },
  {
    id: 11,
    title: 'Zanzariera Navicella Bianca',
    description: 'Zanzariera bianca leggera per proteggere la navicella durante le passeggiate.',
    price: 14.9,
    image: 'assets/catalogo/zanzariera.jpg',
    category: 'Accessori',
  },
  {
    id: 12,
    title: 'Palestrina Enjoy Gym Chicco Beige',
    description:
      'Palestrina morbida con giochi sospesi, luci e stimoli sensoriali per i primi mesi.',
    price: 54,
    image: 'assets/catalogo/palestrina.jpg',
    category: 'Gioco',
  },
  {
    id: 13,
    title: 'Maxi Tappeto 2 in 1 Chicco',
    description:
      'Tappeto gioco pieghevole 2 in 1, ampio e colorato, ideale per il tummy time e il gioco a terra.',
    price: 43,
    image: 'assets/catalogo/tappeto-chicco.jpg',
    category: 'Gioco',
  },
  {
    id: 14,
    title: 'Aspiratore Nasale Elettrico Nuvita',
    description:
      'Aspiratore nasale elettrico con batteria ricaricabile, pratico per l’igiene respiratoria.',
    price: 35,
    image: 'assets/catalogo/aspiratore-nasale.jpg',
    category: 'Cura',
  },
  {
    id: 15,
    title: 'CHICCO Trio Bellagio Black Satin',
    description:
      'Trio Bellagio con borsa e stand Lullaglide, completo per passeggino, navicella e auto.',
    price: 649,
    image: 'assets/catalogo/trio-bellagio.jpg',
    category: 'Passeggio',
    featured: true,
    available: false,
  },
  {
    id: 16,
    title: 'Lettino Forever 8 in 1 Brevi',
    description:
      'Lettino evolutivo bianco e naturale con tessile beige, trasformabile in diverse configurazioni.',
    price: 399,
    image: 'assets/catalogo/lettino-forever.jpg',
    category: 'Nanna',
    featured: true,
  },
  {
    id: 17,
    title: 'Chicco carillon orsetto',
    description:
      'Il Carillon Orsetto di Chicco è il soffice amico di peluche che coccolerà il tuo bimbo in ogni momento: realizzato in morbidissimo velour anallergico, è dotato di un pratico laccetto che gli permette di essere fissato sia sulla culla che al passeggino. Suona una dolce melodia che lo aiuterà a rilassarsi sia nel momento della nanna che fuori casa.',
    price: 19.71,
    image: 'assets/catalogo/carillon.jpg',
    category: 'Nanna',
    featured: true,
  },
  {
    id: 18,
    title: 'CHICCO Gioco Next2 Dreams Neutra',
    description:
      'La giorstina Next2Dreams è stata progettata da Chicco come il partner ideale per la maggior parte dei lettini Chicco Next2Me, ma può essere installato rapidamente e in sicurezza su la maggior parte dei letti in legno.',
    price: 35.92,
    image: 'assets/catalogo/giostrina.jpg',
    category: 'Nanna',
    featured: true,
  },
  {
    id: 19,
    title: 'Portabottiglie e contenitore termico per alimenti',
    description:
      'In acciaio inossidabile, permette di trasportare in tutta comodità la pappa del tuo bambino, mantenendone la temperatura per 5 ore',
    price: 32,
    image: 'assets/catalogo/thermos.jpg',
    category: 'Passeggio',
    featured: true,
  },
  {
    id: 20,
    title: 'Set igiene 5in1 my first beauty azzurro 0m+ - chicco',
    description:
      "Il Set Igiene 'Mi first beauty set' è una simpatica e utile idea regalo.\n" +
      'In una pratica borsa multi-tasca sono contenuti tutti i prodotti necessari all’igiene quotidiana del bambino: una morbida spugna, forbicine a lame curve, una spazzola con setole naturali, un pettine dalle punte arrotondate ed un bagnoschiuma primimesi. Attenzione: la confezione può contenere il bagnoschiuma oppure un simpatico termometro a forma di pesce palla.\n' +
      'La borsina si può comodamente appendere al muro e mantiene sempre a portata di mano gli accessori custoditi all’interno.',
    price: 25.52,
    image: 'assets/catalogo/myfirst.jpg',
    category: 'Cura',
    featured: true,
  },
  {
    id: 21,
    title: 'Seggiolino da tavolo 360 stone - chicco',
    description:
      'Il seggiolino Chicco 360, grazie ad un esclusivo sistema di rotazione, ti consente di scegliere tra 6 posizioni diverse per interagire con il tuo bambino in modo costante. Brevettato da Chicco per garantirti la massima sicurezza e offrire un comfort ideale al bebè durante i pasti, il seggiolino da tavolo 360 occupa poco spazio e grazie alla pratica borsa puoi portarlo con te ovunque. Rivestito di morbido tessuto lavabile con una spugnetta.',
    price: 79.99,
    image: 'assets/catalogo/sediolinotavolo.jpg',
    category: 'Pappa',
    featured: true,
  },
  {
    id: 22,
    title: 'Nuvita Mix70 Scaldabiberon Portatile Universale',
    description:
      'Riscaldamento rapido: 120 ml da 20°C a 37°C in circa 3 minuti. 5 temperature selezionabili: 37°C, 40°C, 45°C, 50°C e 70°C, per latte materno, artificiale e acqua. Perfetto per preparare il latte in polvere seguendo le raccomandazioni OMS (Organizzazione Mondiale Sanità). Piastra in acciaio inox 316 di grado medicale, sicuro per il contatto con gli alimenti e sterilizzabile con raggi UV. Funzione di mescolamento automatico, per una temperatura del latte più omogenea senza creare bolle d’aria. ino a 11 biberon con una sola ricarica. Mantiene la temperatura per 4 ore mescolando ad intervalli regolari. Compatibile con la maggior parte dei biberon (6 adattatori anti-goccia inclusi).  ',
    price: 78.99,
    image: 'assets/catalogo/scalabiberonportatile.jpg',
    category: 'Passeggio',
    featured: true,
  },
  {
    id: 23,
    title: 'Chicco Scaldabiberon Casa Per Riscaldare Latte e Pappa',
    description:
      'Lo scaldabiberon Chicco è stato concepito per scaldare il latte in modo graduale, consentendo così di preservarne i nutrienti e in particolare la vitamina B, preziosa per la crescita. Riscalda il latte a 37°, la temperatura più idonea di somministrazione al bambino.',
    price: 31.90,
    image: 'assets/catalogo/scaldabiberon.jpg',
    category: 'Pappa',
    featured: true,
  },
];
