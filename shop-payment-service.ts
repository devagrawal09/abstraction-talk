namespace ShopPaymentService {
  class PaymentService {
    paypalApi: string;

    constructor(paypalApi: string) {
      this.paypalApi = paypalApi;
    }

    sendPaymentRequest(order: Order) {
      sendPaymentRequest(
        this.paypalApi,
        order.buyer.paypalId,
        order.cost
      );
    }
  }

  class Shop {
    paymentService: PaymentService;

    constructor() {
      this.paymentService = new PaymentService("paypal api url...");
    }

    placeOrder(buyer: Customer, product: Product) {
      const order = new Order(buyer, product);
      this.paymentService.sendPaymentRequest(order);
    }
  }
}