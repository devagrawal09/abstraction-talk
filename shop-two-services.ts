namespace ShopTwoServices {
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
  
  class NotificationService {
    sendgridApi: string;

    constructor(sendgridApi: string) {
      this.sendgridApi = sendgridApi;
    }

    sendEmail(order: Order) {
      sendEmail(
        this.sendgridApi,
        order.buyer.email,
        `You have purchased ${order.product.name}`
      );
    }
  }

  class Shop {
    paymentService: PaymentService;
    notificationService: NotificationService;

    constructor() {
      this.paymentService = new PaymentService("paypal api url...");
      this.notificationService = new NotificationService("sengrid api url...");
    }

    placeOrder(buyer: Customer, product: Product) {
      const order = new Order(buyer, product);
      this.paymentService.sendPaymentRequest(order);
      this.notificationService.sendEmail(order);
    }
  }
}