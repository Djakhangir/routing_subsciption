import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoService } from './../Shared/info.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
public selectedRow:Number
public posts: Object

  constructor(
    private info:InfoService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.info.getPosts().subscribe(info=>this.posts = info)
  }

}
