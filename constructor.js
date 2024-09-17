class Product{
   constructor(n,p,r){
    console.log("calling the consructor");
    this.name=n;
    this.price=p;
    this.rating=r;
    // return 10; if you are returning primitive then it will be avoided in consructor
    //return{x:2,y:5}// if you are return non premitive(custom) then it will be returned
   }

//behavior - functions - member functions
display(){
    console.log("this refers to", this);
    
    console.log("displaying the current product", this.name, this.price, this.rating);
    
}


}
const p=new Product("iphone","10000",5);
console.log(p);

//console.log(p.name);
p.display();