export class Order {
    constructor(id, customerId, date, total, discount, paid, orderDetails = []) {
        this.id = id;
        this.customerId = customerId;
        this.date = date;
        this.total = total;
        this.discount = discount;
        this.paid = paid;
        this.orderDetails = orderDetails;
    }
}