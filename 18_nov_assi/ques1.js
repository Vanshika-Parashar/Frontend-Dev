class Product{
    constructor(id,name,price,category){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applydiscount(percent=10){
        const dis=(this.item*percent)/100;
        this.price-=dis;
    }
    display(){
        return `
        id: ${this.id}
        category:${this.category}
        price:${this.price}
        Name:${thisname}`;

    }
}
    const Product= [
        new Product(1,"Laptop",55000,Electricals),
        new Product(2,"eyeshadow",3500,Makeup),
        new Product(3,"Bag",550,Essentials),
        new Product(4,"charger",500,Electricals),
        new Product(5,"Lipstick",4500,Makeup)

    ];
    Product.forEach(p=>p.applydiscount(10));
    const filter=Product.filter(p=>p.price>1000);
    console.log("products having price more than 1000:/n");
    filter.forEach(p=>console.log(p.display()));

