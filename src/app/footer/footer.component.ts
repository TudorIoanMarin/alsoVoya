import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerMessage: string;

  constructor( ) { }

  private getFooterMessage(): string {
    return `Copyright @ Flying Spaghetti Monster ; Powered by The Dudes`;
  }

  ngOnInit() {
  }

}
