import { IImageInfo } from "./IImageInfo";

export class Collection {
  id: number;
  images: IImageInfo[];

  constructor(public name: string) {
    this.id = Date.now();
    this.name = name;
    this.images = [];
  }
}
