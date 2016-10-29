import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  @Output() latlng = new EventEmitter();
  data: string;


  ngOnInit() {
  }

  start() {
    recognition.start();
  }

  stop() {
    recognition.stop();
  }

  constructor(private http: Http) {
    var self = this;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "cmn-Hant-TW";
    recognition.onstart = function () { console.log('開始辨識...'); };
    recognition.onend   = function () { console.log('停止辨識!'); };
    recognition.onresult = function (event) {
      var i = event.resultIndex;
      var j = event.results[i].length - 1;
      var final = event.results[i].isFinal;

      self.data = event.results[i][j].transcript;
      console.log(self.data);

      if (final) {
        self.stop();
        self.findLocation();
      }
    }
  }

  findLocation() {
    var loc = this.data.split('帶我去')[1];
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + '&key=AIzaSyDBLIZVXRdpoqfHEAQWd-uSEpv4Vt60W4s')
      .subscribe(value => {
        this.latlng.emit(value.json().results[0].geometry.location);
      })
  }
}
export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
const {webkitSpeechRecognition}: IWindow = <IWindow>window;
const recognition = new webkitSpeechRecognition();
