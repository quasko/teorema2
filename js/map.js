ymaps.ready(init);

        function init() {
            // Создание экземпляра карты.
            var myMap = new ymaps.Map('map', {
                center: [55.7613,37.4768],
                zoom: 13,
				controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'fullscreenControl', 'searchControl']
            });
			var zoom = 13;
            // Контейнер для меню.
            var menu = $('<ul class="nav nav-list"/>');

            // Перебираем все группы.
            $.each(groups, function (index, group) {
                // DOM-представление группы.
                var menuItem = $('<li class="nav-header"><span class="label label-' + group.style + '">' + group.name + '</span></li>'),
                    // Создадим коллекцию для геообъектов группы.
                    collection = new ymaps.GeoObjectCollection(null, { preset: group.preset });

                // Добавляем коллекцию на карту.
                myMap.geoObjects.add(collection);

			
                // Перебираем элементы группы.
				var clubNumber = 1;
                $.each(group.items, function (index, item) {
				//$.each('.col1', function (index, item) {
                    // DOM-представление элемента группы.
					
					var selector="li#club"+ clubNumber;
					console.log(selector);				
                    //var menuItem = $('<li><a href="#">' + item.name + '</a></li>'),
					var menuItem = $(selector),
					
                        // Создаем метку.
                        placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });
					console.log(menuItem);
                    // Добавляем метку в коллекцию.
                    collection.add(placemark);
					
                    menuItem
                        // Добавляем пункт в меню.
                        //.appendTo(menu)
                        // Навешиваем обработчик клика по пункту меню.
                        .on('click', function (e) {
                            // Отменяем основное поведение (переход по ссылке)
                            e.preventDefault();
							console.log("click");
                            // Выставляем/убираем класс active.
                            menuItem
                                .toggleClass('active')
                                .siblings('.active')
                                .removeClass('active');
							placemark.balloon.open();
                            // Открываем/закрываем баллун у метки.
                            if(placemark.balloon.isOpen()) {
                                placemark.balloon.close();
								
								console.log("balloon open");
                            }
                            else {
                                // Плавно меняем центр карты на координаты метки.
								console.log(zoom);	
								//myMap.setCenter(item.center, zoom);
								
                                myMap
									.panTo(item.center, {
										delay: 0,
										callback: function () {
													placemark.balloon.open();
													}
									});
									/*myMap.setZoom(zoom);*/
									
								
                            }
                        });
					clubNumber++;	
                });
            });

            // Добавляем меню в сайдбар.
           // menu.appendTo($('#sidebar'));
            // Выставляем масштаб карты чтобы были видны все группы.
			
            myMap.setBounds(myMap.geoObjects.getBounds());
        }