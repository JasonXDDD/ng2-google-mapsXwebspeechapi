import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';


@Component({
    selector: 'app-speech',
    templateUrl: './speech.component.html',
    styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

    @Output() latlng = new EventEmitter();
    data = "saying...";
    recognition: any;

    constructor(private http: Http, private zone: NgZone) {
    }

    ngOnInit() {
        this.recognition = new webkitSpeechRecognition();

        var self = this;
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = "cmn-Hant-TW";

        this.recognition.onstart = function() {
            console.log('開始辨識...');
        };
        this.recognition.onend = function() {
            console.log('停止辨識!');
        };

        this.recognition.onresult = function(event) {
            var i = event.resultIndex;
            var j = event.results[i].length - 1;
            var final = event.results[i].isFinal;

            self.data = event.results[i][j].transcript;
            console.log(self.data);
            self.zone.run(() => { })

            if (final) self.stop();

        }
    }

    start() {
        this.data = "saying...";
        this.recognition.start();
    }

    stop() {
        this.data = "search: " + this.data;
        this.recognition.stop();
        this.findLocation();
    }

    findLocation() {
        var loc = this.data.split('search: 帶我去');
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + '&key=[Your MAPS API KEYS]')
            .subscribe(value => {
                this.latlng.emit(value.json().results[0].geometry.location);
            })
    }
}
export interface IWindow extends Window {
    webkitSpeechRecognition: any;
}
const {webkitSpeechRecognition}: IWindow = <IWindow>window;
