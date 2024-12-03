import { IImageInfo } from "./IImageInfo";

export class Collection {
  images: IImageInfo[];

  constructor(public name: string) {
    this.name = name;
    this.images = [];
  }
}
