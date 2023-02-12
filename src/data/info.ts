export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const products: IProduct[] = [
  {
    id: 0,
    image: "/images/camera.jpg",
    title: "Camera",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 220,
  },
  {
    id: 1,
    image: "/images/cocacola.jpg",
    title: "Coca-cola",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 5,
  },
  {
    id: 2,
    image: "/images/donuts.jpg",
    title: "Donuts",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 10,
  },
  {
    id: 3,
    image: "/images/lens.jpg",
    title: "Lens",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 90,
  },
  {
    id: 4,
    image: "/images/lip.jpg",
    title: "Lip",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 16,
  },
  {
    id: 5,
    image: "/images/lotion.jpg",
    title: "Lotion",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 45,
  },
  {
    id: 6,
    image: "/images/oil.jpg",
    title: "Oil",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 17,
  },
  {
    id: 7,
    image: "/images/sneakers.jpg",
    title: "Sneakers",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 160,
  },
  {
    id: 8,
    image: "/images/watch.jpg",
    title: "Watch",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 160,
  },
];

export default products;
