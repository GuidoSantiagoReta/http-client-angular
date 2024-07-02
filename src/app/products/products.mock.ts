export const productsList: Product[] = [
  {
    id: 1,
    name: 'Remera',
    price: 8000,
    description: 'remera',
    image: '/assets/',
  },
  {
    id: 2,
    name: 'Pantalon',
    price: 30000,
    description: 'pantalon',
    image: '/assets/',
  },
  {
    id: 3,
    name: 'Buzo',
    price: 10000,
    description: 'buzo',
    image: '/assets/',
  },
  {
    id: 4,
    name: 'Zapatillas',
    price: 35000,
    description: 'zapatillas',
    image: 'assets/',
  }, //sin descripcion
];

// Interfaz de productos
export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string; //? se utiliza para no hacer obligatorio alguna propiedad
  image: string;
}
