import { ICustomer } from "./customer"

export interface ICustomerType{
  CustomerTypeId:number
  CustomerTypeName: string,
  Customers: Array<ICustomer>
}
