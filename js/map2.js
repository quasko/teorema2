	
ymaps.ready(init);

var myMap;

function init () {
    myMap = new ymaps.Map(
        'map', {
            center: [54.193042,37.617757],
            zoom: 13,
			controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'fullscreenControl']
        });
	
	myGeoObject1 = new ymaps.Placemark([55.8642, 37.5666], {
            balloonContentHeader: "Петровско-Разумовская",
            balloonContentBody: "+7 (495) 975-95-25 <br> Адрес: г. Москва<br> ул.Дубнинская 12а, здание АТС<br>pr@teorema-sporta.ru",
            hintContent: "Петровско-Разумовская"
        });
	myGeoObject2 = new ymaps.Placemark([55.6309, 37.6014], {
            balloonContentHeader: "Чертаново",
            balloonContentBody: "+7 (495) 975-95-25<br>Адрес: г. Москва,<br>Чертановская улица, 7А<br>teorema@teorema-sporta.ru",
            hintContent: "Чертаново"
        });
	myGeoObject3 = new ymaps.Placemark([55.4990, 37.5679], {
            balloonContentHeader: "Щербинка",
            balloonContentBody: "+7 (495) 975-95-25<br>Адрес: г. Щербинка,<br>ул. Железнодорожная 44, ТЦ «Акварель»<br>sherbinka@teorema-sporta.ru",
            hintContent: "Щербинка"
        });
		
		myMap.geoObjects.add(myGeoObject1);
		myMap.geoObjects.add(myGeoObject2);
		myMap.geoObjects.add(myGeoObject3);
		
function setBounds1 () { myMap.panTo([55.8642, 37.5666]).then(
	function () { myGeoObject1.balloon.open();});
}
function setBounds2 () { myMap.panTo([55.6309, 37.6014]).then(
	function () { myGeoObject2.balloon.open();});
}
function setBounds3 () { myMap.panTo([55.4990, 37.5679]).then(
	function () { myGeoObject3.balloon.open();});
};
};
