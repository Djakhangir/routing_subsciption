import { DataService } from './../Shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
public bookList=[]
public selectedRow: Number
subscription: any;
currentUrl:string;

  constructor(
    private data:DataService,
    private router: Router,
    private route:ActivatedRoute
  ) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url); 
  }

  ngOnInit() {
    this.bookList = this.data.getListOfBooks();
    this.subscription = this.route.params.subscribe((params) => {
      this.selectedRow=params.term; 
      
  });
  }

  // getListOfBooks(): any{
  //   this.bookList = this.data.getListOfBooks();
  // }

  setClickedRow (term:string) { 
    this.router.navigate(['page1', term]// {relativeTo: this.activatedRoute}
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  };

}
