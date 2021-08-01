class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Volkan"
console.log(customer.name)

Customer.some = "some";
console.log(Customer.some)

console.log(customer.customerNumber)

class IndivisualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}