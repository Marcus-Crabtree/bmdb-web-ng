export class Movie {
    id: number;
    title: string;
    rating: string;
    year: number;
    director: string;

    constructor(id: number = 0, title: string = "", rating: string = "", year: number = 0, driector: string = "") {

    }

  about(){
        return `Movie Details: ID: ${this.id}, Title: ${this.title}, Rating: ${this.rating}, Year: ${this.year}, Director: ${this.director}.`;    }
}
