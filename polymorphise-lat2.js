class Employee {
    constructor(){
       this.baseSalary = 5000000;
       this.basePartTimeSalary = 50000;
    }
    calculateSalary() {}
}

class FullTimeEmployee extends Employee {
    calculateSalary(){
        return console.log('Gaji Karyawan Fulltime adalah Rp.$(this.baseSalary)')
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(){
        return console.log('menerima gaji' ${} )
    }
}

const fulltimeemployee = new FullTimeEmployee ();
const parttimeemployee = new PartTimeEmployee ();
