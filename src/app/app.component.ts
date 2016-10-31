import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular2-google-maps & WebSpeechApi project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private zone: NgZone) {

  }

  setloc(data) {
    this.lat = data.lat;
    this.lng = data.lng;
    this.zone.run(() => { })
  }
}
