class Customer {
  name: string;
  email: string;
  paypalId: string;

  constructor(name: string, email: string, paypalId: string) {
    this.name = name;
    this.email = email;
    this.paypalId = paypalId;
  }

  changePaypalId(id: string) {
    this.paypalId = id;
  }

  buy(product: Product): Order {
    return new Order(this, product);
  }
}

class Product {
  name: string;
  description: string;
  price: number;

  changePrice(price: number) {
    this.price = price;
  }
}

class Order {
  buyer: Customer;
  product: Product;
  cost: number;

  constructor(buyer: Customer, product: Product) {
    this.buyer = buyer;
    this.product = product;
    this.cost = product.price;
  }

  cancel() {
    this.cost = 0;
  }
}