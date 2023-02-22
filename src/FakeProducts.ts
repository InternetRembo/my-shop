import { product } from "./redux/types/productTypes";

const images = [
  "https://www.pngmart.com/files/22/T-Shirt-Transparent-Images-PNG.png",
  "https://www.pngmart.com/files/22/T-Shirt-Transparent-Isolated-PNG.png",
  "https://www.pngmart.com/files/22/T-Shirt-PNG-Isolated-HD.png",
  "https://www.pngmart.com/files/22/T-Shirt-PNG-Clipart.png",
  "https://www.pngmart.com/files/22/Wide-Neck%E2%80%93Off-Shoulder-T-Shirt-PNG.png",
  "https://www.pngmart.com/files/22/Wide-Neck%E2%80%93Off-Shoulder-T-Shirt-PNG-Pic.png",
  "https://www.pngmart.com/files/22/Raglan-Sleeve-T-Shirt-PNG-Clipart.png",
  "https://www.pngmart.com/files/22/Ringer-T-Shirt-PNG-File.png",
  "https://www.pngmart.com/files/22/Embellished-T-Shirt-PNG-Photo.png",
  "https://www.pngmart.com/files/22/Graphic-T-Shirt-PNG-Clipart.png",
  "https://www.pngmart.com/files/22/Baby-Doll-T-Shirt-PNG.png",
  "https://www.pngmart.com/files/22/Striped-T-Shirt-PNG-Image.png",
  "https://www.pngmart.com/files/20/Summer-Hat-PNG-Isolated-Picture.png",
  "https://www.pngmart.com/files/20/Summer-Hat-PNG-Isolated-Pic.png",
  "https://www.pngmart.com/files/20/Summer-Hat-PNG-Isolated-Free-Download.png",
  "https://www.pngmart.com/files/20/Summer-Hat-PNG-File.png",
  "https://www.pngmart.com/files/20/Summer-Hat-PNG-Image.png",
  "https://www.pngmart.com/files/16/Mexican-Hat-PNG-File.png",
  "https://www.pngmart.com/files/16/Straw-Mexican-Hat-Transparent-Background.png",
  "https://www.pngmart.com/files/16/Straw-Mexican-Hat-PNG-Image.png",
  "https://www.pngmart.com/files/16/Straw-Mexican-Hat-PNG-File.png",
  "https://www.pngmart.com/files/15/Summer-Straw-Hat-PNG-Transparent-Image.png",
  "https://www.pngmart.com/files/15/Beige-Straw-Hat-PNG-Photos.png",
  "https://www.pngmart.com/files/15/Baseball-Pink-Hat-PNG-Photos.png",
  "https://www.pngmart.com/files/15/Woolen-Winter-Hat-PNG-Image.png",
  "https://www.pngmart.com/files/15/Baseball-Pink-Hat-Transparent-PNG.png",
  "https://www.pngmart.com/files/15/Woolen-Winter-Hat-PNG-Clipart.png",
];

const getRandom = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createFakeProducts = () => {
  let fakeProducts: product[] = [];

  for (let i = 0; i < 100; i++) {
    fakeProducts.push({
      category: "women's clothing",
      description:
        "This is a fake product.Since the API i used has only 20 products i created a few myself",
      title: `Fake product ${i}`,
      id: 400 + i,
      image: images[getRandom(0, images.length)],
      price: getRandom(10, 900),
      rating: {
        count: getRandom(0, 5),
        rate: getRandom(1, 1000),
      },
      fake: true,
    });
  }

  return fakeProducts;
};
export default createFakeProducts;
