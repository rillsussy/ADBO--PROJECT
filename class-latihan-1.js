class Storeltem {
 constructor(name, price) {
    this.name = name;
    this.price = price;
 }

 info() {
    return console.log(
        `${this.name} ini berjumlah ${this.price}`
    )
 }
}

const storeltem = new Storeltem("mobil", "20");
storeltem.info();