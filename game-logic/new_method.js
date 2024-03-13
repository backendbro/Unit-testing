class Person {
    constructor(name, age, membership) {
        this.name = name 
        this.age = age 
        this.membership = membership 
    }

    getName () {
        return this.name 
    }

    getAge () {
        return this.age 
    }

    getMembership () {
        return this.membership 
    }
}

export {Person} 
