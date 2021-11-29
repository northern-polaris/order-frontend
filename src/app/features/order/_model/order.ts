export interface Order {
  id: number;
  code: number;
  code_year: number;
  creator_id: number;
  customer_id: number;
  customer_name: string;
  date_registered: string;
  order_units: OrderUnit[];
}

export interface OrderUnit {
  amount: number;
  price: number;
  product_id: number;

}
