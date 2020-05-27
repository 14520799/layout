import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../service/layout.service';
import { LayoutDto } from '../core/models/layout.dto'

@Component({
  selector: 'app-layout-generate',
  templateUrl: './layout-generate.component.html',
  styleUrls: ['./layout-generate.component.css'],
  providers: [LayoutService],
})

export class LayoutGenerateComponent implements OnInit {
  public layouts: LayoutDto[];
  private listSub: Subscription[] = [];

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.loadLayout();
  }

  public loadLayout(){
    this.listSub.push( this.layoutService.loadLayoutControl().subscribe((layouts: LayoutDto[])=>{
      this.layouts = layouts;
    }))
  }

  

}
