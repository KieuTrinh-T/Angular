import { Cosmetic } from "./cosmetic";

export class Cart{
  constructor(
    public Product:Cosmetic = new Cosmetic(),
    public Quantity:number = 0,
  ){}
}
