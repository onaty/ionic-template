export class Product {

  store_id: number;
  name: string;
  type: string;
  image_url:string;
  brand_id: number;
  categories_id: number;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}
