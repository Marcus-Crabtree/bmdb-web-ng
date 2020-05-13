import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-create',
  templateUrl: '../credit-maint-shared/credit-maint.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title: string ="Credit-Create";
  credit: Credit = new Credit();
  submitBtnTitle: string = "Create";

  constructor(private creditSvc: CreditService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.creditSvc.create(this.credit).subscribe(
      jr => {
        // if jer.errors is null, save was successful
        if(jr.errors==null){
          //success
          this.router.navigateByUrl("/credit/list");
        }
        else {
          console.log("***Error creating new Credit: ",this.credit, jr.errors);
        }
      });
  }

}
