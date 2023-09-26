class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const search = this.books.find((item) => { 
            return item[type] === value; 
        });

        if (search === undefined) {
            return null;
        }

        return search;
    }

    giveBookByName(bookName) {
        const findBook = this.books.find((item) => {
            return item.name === bookName;
        });

        if (findBook === undefined) {
            return null;
        }

        const bookItem = this.books[findBook];
        this.books.splice(findBook, 1);
        return findBook;
    }
}




class Student {
    constructor(name){
        this.name = name,
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5){
            return;
        }
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        } 
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }

        return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        } 

        return subjects.reduce((acc, subject) => acc += this.getAverageBySubject(subject), 0) / subjects.length;
    }
}
