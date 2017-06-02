import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedLinkInfo = 'recipe';

  onNavigate(linkData: string) {
      this.clickedLinkInfo = linkData;
  }

}
