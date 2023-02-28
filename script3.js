class Uber{
    constructor(name,km,vehicle,place){
        this.name=name;
        this.km=km;
        this.vehicle=vehicle;
        this.place=place;
    }
  getfullname(){
      
      return this.name;
  }

getprice(){
    return this.km*18;
} 
 
gettransport(){
    return this.vehicle;
}
getaddress(){
   return this.place;
}
}
var delivery= new Uber('charlie',24,'honda','pune');
console.log(delivery.getfullname());
console.log(delivery.getprice());
console.log(delivery.gettransport());
console.log(delivery.getaddress());