import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor = new Actor;
  title: string = "Actor-Detail";
  actorId: number =0;


  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pull the id from route:
    this.route.params.subscribe(parms => this.actorId = parms["id"]);
    //pull actor detials from id
    this.actorSvc.get(this.actorId).subscribe(
      jr => {
        this.actor = jr.data as Actor;
        console.log("Actor has been found!: ", this.actor);
      });
  }

  delete() {
    this.actorSvc.delete(this.actorId).subscribe(
      jr => {
        if(jr.errors==null) {
          console.log(jr.data);
          this.router.navigateByUrl("/actor/list");
        }
        else {
          console.log("***Erroer deleting actor!: ", this.actorId,jr.errors);
        }
      });
  }

}