import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-edit',
  templateUrl: '../credit-maint-shared/credit-maint.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title: string = "Movie-Edit";
  submitBtnTitle: string = "Edit";
  credit: Credit = new Credit();
  creditId: number =0;

  constructor(private creditSvc: CreditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params. subscribe(parms => this.creditId = parms["id"]);
    this.creditSvc.get(this.creditId).subscribe(
      jr => {
        this.credit = jr.data as Credit;
      });
  }
  save() {
    this.creditSvc.edit(this.credit).subscribe(
      jr => {
        if (jr.errors == null) {
          //success
          this.router.navigateByUrl("/credit/list");
        }
        else {
          console.log("***Error editing this movie: ",this.credit, jr.errors)
        }
      }
    )
   }
}
