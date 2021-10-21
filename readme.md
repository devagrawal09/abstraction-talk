# E-commerce App

This repository was created to supplement the "Abstraction in Programming" talk given at ITSA and ACM@UC on 10/21/21.

## Description

This repository uses the example of a small e-commerce app to demonstrate various levels of abstraction implemented in software development using

* Entity classes
* Service classes
* Aggregate class
* Observer pattern

## Entities

The repository uses 3 basic entity classes:

* `Customer`: A customer who can buy products, and is registered using an email and paypal id.
* `Product`: Something that can be bought, and has a price.
* `Order`: A representation of a customer buying a single product, and the associated cost.

## Services

The `ShopWithServices` namespace contains 2 examples of service classes:

* `PaymentService`: Used to make payment requests when a new order is placed.
* `NotificationService`: Used to send email notifications to the customer when a new order is placed.

## Aggregate

The `ShopWithServices` namespace implements a `Shop` aggregate class that encapsulates the service classes.

## Observer pattern

The `ObserverShop` namespace implements the `Shop` aggregate and its services using the [Observer pattern](https://refactoring.guru/design-patterns/observer) to automatically trigger logic when an order is placed. This implementation adds:

* `Listener`: The interface that will be implemented by any class that can subscribe to events. Is implemented by the `PaymentService` and `NotificationService` class.
* `OrderManager`: The class that holds and notifies the listeners when an order is placed.
