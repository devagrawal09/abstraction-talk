namespace ObserverShop {
  interface Listener {
    update(data);
  }

  class PaymentService implements Listener {
    paypalApi: string;

    constructor(paypalApi: string, orderManager: OrderManager) {
      this.paypalApi = paypalApi;
      orderManager.subscribe(this);
    }

    update(order: Order) {
      sendPaymentRequest(
        this.paypalApi,
        order.buyer.paypalId,
        order.cost
      );
    }
  }

  class NotificationService implements Listener {
    sendgridApi: string;

    constructor(sendgridApi: string, orderManager: OrderManager) {
      this.sendgridApi = sendgridApi;
      orderManager.subscribe(this);
    }

    update(order: Order) {
      sendEmail(
        this.sendgridApi,
        order.buyer.email,
        `You have purchased ${order.product.name}`
      );
    }
  }

  class OrderManager {
    listeners: Listener[];

    subscribe(listener: Listener) {
      this.listeners.push(listener);
    }
    notify(order: Order) {
      this.listeners.forEach(l => l.update(order));
    }
  }

  class Shop {
    orderManager: OrderManager;

    paymentService: PaymentService;
    notificationService: NotificationService;

    constructor() {
      this.orderManager = new OrderManager();

      this.paymentService = new PaymentService(
        "paypal api url...",
        this.orderManager
      );

      this.notificationService = new NotificationService(
        "sengrid api url...",
        this.orderManager
      );
    }

    placeOrder(buyer: Customer, product: Product) {
      const order = new Order(buyer, product);
      this.orderManager.notify(order);
    }
  }
}