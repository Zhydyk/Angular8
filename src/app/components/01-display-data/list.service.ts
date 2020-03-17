import { Injectable } from "@angular/core";
import { Item } from "./item.model";

@Injectable()
export class ListService {
  constructor() {}

  getItem(): Item {
    return new Item(1, "Create", 1, 8, 0, false);
  }

  getItems(): Item[] {
    return [
      new Item(1, "Estimate", 1, 8, 8, true),
      new Item(1, "Create", 2, 8, 4, true),
      new Item(1, "Deploy", 3, 8, 0, true)
    ];
  }
}
