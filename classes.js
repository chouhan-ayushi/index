class Product{
    // properties - variables -data members
    name;
    price;
    rating;

//behavior - functions - member functions
display(){
    console.log("displaying the current product");
    
}


}
const p=new Product();// new- creates an empty plain object
console.log(p);
p.display();
