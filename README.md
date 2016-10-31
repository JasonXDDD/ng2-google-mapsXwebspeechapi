#帶我去環遊世界 Bring Me to Around the World
angular2 **X** web speech api **X** ng2-google-maps

---

##I. Install

1. create ng2 project
```bash
	$ ng new project_name --skip-npm
	$ cd project_name
	$ yarn
	$ ng serve
```

2. install ng2-google-maps
```bash
	$ npm install angular2-google-maps --save
```

---

## II. Set ng2-google-maps in AppModule

import module
```typescript
	import { AgmCoreModule } from 'angular2-google-maps/core';
```

setting
```typescript
	AgmCoreModule.forRoot({
      apiKey: '[Your MAPS API KEYS]'
    })
```
> **Maps API Keys**: 
> goto [Google Maps API for Javascript](https://developers.google.com/maps/documentation/javascript/?hl=zh-tw), and get API Keys

---

## III. Web Speech API
> **web speech api 是chrome內建的語音辨識功能，必須是chrome瀏覽器才能使用。**

DEMO LINK: [https://www.google.com/intl/en/chrome/demos/speech.html](https://www.google.com/intl/en/chrome/demos/speech.html)
GUIDE: [https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)

How to Use?
```javascript
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "cmn-Hant-TW";

    recognition.onstart = function() {
	    console.log('開始辨識...');
    };
    recognition.onend = function() {
        console.log('停止辨識!');
    };
    recognition.onresult = function(event) {
		var i = event.resultIndex;
        var j = event.results[i].length - 1;
        console.log('辨識資料: ');
        console.log(event.results[i][j].transcript);    
	};
```

---

## IV. NG2-Google-Maps

1. Create an component
```bash
	$ ng g c component_name
```

2. In `component_name.html`, add new tag
```vbscript-html
	<!--set maps view lat/lng-->
	<sebm-google-map [latitude]="" [longitude]="" [zoom]="">
		<!--set marker lat/lng-->
		<sebm-google-map-marker [latitude]="" [longitude]="">
		
		</sebm-google-map-marker>
</sebm-google-map>
```
3. In `component_name.css`, set style
```css
.sebm-google-map-container {
  height: "";
  width: "";
}
```
4. another attribute look this: [https://angular-maps.com/](https://angular-maps.com/)

5. search location and return lat/lng:
```typescript
	this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + 
	'&key=[Your MAPS API KEYS]')
        .subscribe(value => {
            //do something for return value
        })
```


---

## V. More Alert

-  because using web speech API to change ng2 promp. , you need to use `ngZone` to monitor value and change view
-  if you create a **child component** in `app-component`, you can use `EventEmitter` to emit the promp. to parent's event
-  if you need to use `http` module in angular2, don't forget `subscribe` the observable function (http function)

---

## VI. Reference

- Angular2-Google-Maps: [https://angular-maps.com/](https://angular-maps.com/)
- Web Speech API: [https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)
- RxJS: [http://reactivex.io/rxjs/](http://reactivex.io/rxjs/)
- Zone.js in Angular: [http://blog.assaf.co/angular-2-change-detection-zones-and-an-example/](http://blog.assaf.co/angular-2-change-detection-zones-and-an-example/)