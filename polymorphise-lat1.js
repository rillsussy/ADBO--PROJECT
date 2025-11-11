class Vehicle {
show (){
        return console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle{
    show (){
        return console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle{
    show (){
        return console.log("Kapal berlayar di laut");
    }
}

const car = new Car();
const boat = new Boat();

car.show();
boat.show();