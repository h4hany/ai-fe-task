export class Book {
    constructor(id, gutenberg_id, title, author, content) {
        this.id = id;
        this.gutenberg_id = gutenberg_id;
        this.title = title;
        this.author = author;
        this.content = content;
    }

    static fromJSON(json) {
        return new Book(
            json.id,
            json.gutenberg_id,
            json.title,
            json.author,
            json.content
        );
    }
} 