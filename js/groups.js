ymaps.ready(init);

function init() {
	// Группы объектов
// Группы объектов
var groups = [{
name: "Известные памятники", 
preset: "twirl#redIcon",
style: "important",
items: [{
center: [50.426472, 30.563022],
name: "Монумент 'Родина-Мать'"
}, {
center: [50.45351, 30.516489],
name: "Памятник Богдану Хмельницкому"
}, {
center: [50.454433, 30.529874],
name: "Арка Дружбы народов"
}]
}, {
name: "Покушайки",
preset: "twirl#greenIcon",
style: "success",
items: [{
center: [50.50955, 30.60791],
name: "Ресторан 'Калинка-Малинка'"
}, {
center: [50.429083, 30.521708],
name: "Бар 'Сало-бар'"
}, {
center: [50.450843, 30.498271],
name: "Абсент-бар 'Палата №6'"
}, {
center: [50.454834, 30.516498],
name: "Ресторан 'Спотыкач'"
}]
}, {
name: "Оригинальные музейчики",
preset: "twirl#orangeIcon",
style: "warning",
items: [{
center: [50.443334, 30.520163],
name: "Музей грамзаписи и старинных музыкальных инструментов"
}, {
center: [50.446977, 30.505269],
name: "Музей истории медицины или Анатомический театр"
}, {
center: [50.452512, 30.530889],
name: "Музей воды. Водно-информационный центр"
}]
}, {
name: "Красивости",
preset: "twirl#blueIcon",
style: "info",
items: [{
center: [50.45987, 30.516174],
name: "Замок Ричарда-Львиное сердце"
}, {
center: [50.445049, 30.528598],
name: "'Дом с химерами'"
}, {
center: [50.449156, 30.511809],
name: "Дом Рыцаря"
}]
}];
    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [50.443705, 30.530946],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Контейнер для меню.
        menu = $('<ul class="menu"></ul>');
        
    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $('<li><a href="#">' + group.name + '</a></li>'),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
        // Контейнер для подменю.
            submenu = $('<ul class="submenu"></ul>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);
        // Добавляем подменю.
        menuItem
            .append(submenu)
            // Добавляем пункт в меню.
            .appendTo(menu)
            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('a')
            .bind('click', function () {
                if (collection.getParent()) {
                    myMap.geoObjects.remove(collection);
                    submenu.hide();
                } else {
                    myMap.geoObjects.add(collection);
                    submenu.show();
                }
            });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu (item, collection, submenu) {
        // Пункт подменю.
        var submenuItem = $('<li><a href="#">' + item.name + '</a></li>'),
        // Создаем метку.
            placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        // Добавляем пункт в подменю.
        submenuItem
            .appendTo(submenu)
            // При клике по пункту подменю открываем/закрываем баллун у метки.
            .find('a')
            .bind('click', function () {
                if (!placemark.balloon.isOpen()) {
                    placemark.balloon.open();
                } else {
                    placemark.balloon.close();
                }
                return false;
            });
    }

    // Добавляем меню в тэг BODY.
    menu.appendTo($('body'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
}