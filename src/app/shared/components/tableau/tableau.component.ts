import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  // @Input() lastRow: {route: string, libelle: string}; // Solution la plus compliquée
  constructor() {
    // console.log(this.libelle_action);
   }

  ngOnInit() {
  }

}
