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
    price: 1300000,
  },
  {
    id: 1,
    image: "/images/cocacola.jpg",
    title: "Coca-cola",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 3000,
  },
  {
    id: 2,
    image: "/images/donuts.jpg",
    title: "Donuts",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 9000,
  },
  {
    id: 3,
    image: "/images/lens.jpg",
    title: "Lens",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 600000,
  },
  {
    id: 4,
    image: "/images/lip.jpg",
    title: "Lip",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 16000,
  },
  {
    id: 5,
    image: "/images/lotion.jpg",
    title: "Lotion",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 45000,
  },
  {
    id: 6,
    image: "/images/oil.jpg",
    title: "Oil",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 17000,
  },
  {
    id: 7,
    image: "/images/sneakers.jpg",
    title: "Sneakers",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 450000,
  },
  {
    id: 8,
    image: "/images/watch.jpg",
    title: "Watch",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    price: 340000,
  },
];

export default products;
