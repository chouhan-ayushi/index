class Product{
    #rating
    constructor(n,p,r){
     console.log("calling the consructor");
     this.name=n;
     this.price=p;
     this.#rating=r;
     
    }
 static custom(){
    console.log("calling a static method");
    
 }
 //behavior - functions - member functions
 display(){
     console.log("this refers to", this);
     
     console.log("displaying the current product", this.name, this.price, this.#rating);
     
 }
 
 
 }
 const p=new Product("iphone","10000",5);
 console.log(p);
 p.rating =10;
 console.log(p.rating);
 
//p.name ="samsung s23"
 Product.custom();
 console.log(p.name);
 p.display();