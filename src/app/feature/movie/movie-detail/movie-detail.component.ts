import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = new Movie();
  title: string = "Movie-Detail";
  movieId: number = 0;

  constructor(private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the id from the route
    this.route.params.subscribe(parms => this.movieId = parms['id']);
    //get the movie for above id
    this.movieSvc.get(this.movieId).subscribe(
      jr => {
        this.movie = jr.data as Movie;
        console.log("Movie has been found!: ",this.movie);
      });    

  }
  delete() {
    this.movieSvc.delete(this.movieId).subscribe(
      jr => {
        if(jr.errors ==null) {
        console.log(jr.data);
        this,this.router.navigateByUrl("/movie/list");
      }
      else {
        console.log("**** Error deleting movie!: ", this.movieId,jr.errors);
      }
      });

  }
}
