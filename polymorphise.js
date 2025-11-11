class Animal {
speak (){
        return console.log("Animal make a sound");
    }
}

class Dog extends Animal{
    speak (){
        return console.log("Dog sound like barks");
    }
}

class Cat extends Animal{
    speak (){
        return console.log("Cat sound like meow");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();