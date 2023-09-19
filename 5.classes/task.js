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
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
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
        if (this.bookName in this.books) {
            delete this.books(bookName);
            return bookName;
        } else {
            return null;
        }



        // const bookIndex = this.books.findIndex((item) => {
        //     return item.bookName === bookName;
        // });

        // if (bookIndex < 0) {
        //     return null;
        // }

        // const bookItem = this.books[bookIndex];
        // this.books.splice(bookIndex, 1);
        // return bookItem;
    }
}




// class Student {
//     constructor(name){
//         this.name = name,
//         this.marks = {};
//     }

//     addMark(mark, subject) {
//         if (2 <= mark <= 5) {
//             this.marks.subject = [mark];
//         }
//     }
// }
