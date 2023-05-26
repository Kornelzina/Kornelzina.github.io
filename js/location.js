ymaps.ready(init);

function init() {
  // Создаем карту
  let myMap = new ymaps.Map("map", {
    center: [54.710162, 20.510137],
    zoom: 13
  });

  // Создаем коллекцию меток
  let myCollection = new ymaps.GeoObjectCollection();

  // Добавляем метки
  myCollection.add(new ymaps.Placemark([54.675538, 20.540455], {
    hintContent: 'ул. Дзержинского, д. 160',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.689528, 20.532451], {
    hintContent: 'ул. Дзержинского, д. 61б',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.708227, 20.505852], {
    hintContent: 'ул. Гюго, д. 1',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.707941, 20.587428], {
    hintContent: 'ул. Крымская, д. 8',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.722592, 20.499977], {
    hintContent: 'пр-т. Советский, д. 8',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.953494, 20.226144], {
    hintContent: 'Пионерский, ул. Комсомольская, д. 31',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.747595, 20.499348], {
    hintContent: 'ул. Петра Панина, д. 2а',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.731040, 20.554343], {
    hintContent: 'ул. Аэропортная, д. 12',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.674351, 20.490194], {
    hintContent: 'ул. Автомобильная, д. 22',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.717074, 20.512553], {
    hintContent: 'ул. Пролетарская, д. 55',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.725711, 20.470171], {
    hintContent: 'ул. Карла Маркса, д. 82',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.702552, 20.505798], {
    hintContent: 'ул. Краснооктябрьская, д. 1-7',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.726444, 20.527843], {
    hintContent: 'ул. Невского, д. 24-30',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.718915, 20.503624], {
    hintContent: 'ул. Черняховского, д. 6А-12А(Океан)',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.735776, 20.463146], {
    hintContent: 'ул. Каштановая аллея, д. 157',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.713330, 20.520647], {
    hintContent: 'ул. Фрунзе, д. 17-21',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.708747, 20.573351], {
    hintContent: 'пр. Московский, д. 231',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.668926, 20.512724], {
    hintContent: 'ул. Олега Кошевого, д. 37а',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.716492, 20.500309], {
    hintContent: 'ул. Театральная, д. 21, ТЦ Маяк',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.724781, 20.501756], {
    hintContent: 'ул. Уральская, д. 18 (ТЦ МЕГА)',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.749226, 20.458520], {
    hintContent: 'пр. Советский, д. 234 (ТЦ Евроспар)',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.720532, 20.473602], {
    hintContent: 'пр. Мира, д. 61-63',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.720361, 20.442763], {
    hintContent: 'ул. Красносельская, д. 85',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.731420, 20.480924], {
    hintContent: 'ул. Космонавта Леонова, д. 55',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.731908, 20.550714], {
    hintContent: 'ул. Липовая Аллея, д. 2',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.722592, 20.499977], {
    hintContent: 'пр. Советский, д. 8',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.731908, 20.550714], {
    hintContent: 'ул. Липовая Аллея, д. 2',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.709325, 20.502618], {
    hintContent: 'пр. Московский, д. 40, ББЦ',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.719659, 20.513533], {
    hintContent: 'ул. Пролетарская, д. 79',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.725815, 20.537536], {
    hintContent: 'ул. Куйбышева, д. 91Б',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.741769, 20.580789], {
    hintContent: 'ул. Шатурская, д. 5',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.736020, 20.508996], {
    hintContent: 'ул. Озёрная, д. 1а',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.720772, 20.510523], {
    hintContent: 'ул. Черняховского, д. 15',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.740366, 20.506112], {
    hintContent: 'ул. Горького, д. 150',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.739643, 20.487922], {
    hintContent: 'ул. Маточкина, д. 2',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.777349, 20.595764], {
    hintContent: 'г. Гурьевск ул. Крайняя, д. 1в',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.762070, 20.605969], {
    hintContent: 'г. Гурьевск Пражский Бульвар, д. 1ж',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.954538, 20.483403], {
    hintContent: 'г. Зеленоградск ул. Окружная, д. 15',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.949890, 20.471518], {
    hintContent: 'г. Зеленоградск ул. Железнодорожная, д. 40',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.958777, 20.474097], {
    hintContent: 'г. Зеленоградск ул. Тургенева, д. 1б',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.925887, 20.172936], {
    hintContent: 'г. Светлогорск пр. Калининградский, д. 2а',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  myCollection.add(new ymaps.Placemark([54.943964, 20.152024], {
    hintContent: 'г. Светлогорск ул. Ленина, д. 20',
    balloonContent: '<div style="font-family: Courier New, monospace; font-size: 14px;">' +
        'ПН-ПТ: с 8:00 до 21:00, СБ-ВС 09:00 до 21:00</div>'
  },{
    iconLayout: 'default#image',
    iconImageHref: './images/geolocation_map.png',
    iconImageSize: [40, 42],
    iconImageOffset: [-3, -42]
  }));
  //Добавляем коллекцию на карту
  myMap.geoObjects.add(myCollection);

  // Создаем список адресов
  let addressesList = document.createElement('ul');
  addressesList.appendChild(createAddressItem('ул. Дзержинского, д. 160', myCollection.get(0)));
  addressesList.appendChild(createAddressItem('ул. Дзержинского, д. 61б', myCollection.get(1)));
  addressesList.appendChild(createAddressItem('ул. Гюго, д. 1', myCollection.get(2)));
  addressesList.appendChild(createAddressItem('ул. Крымская, д. 8', myCollection.get(3)));
  addressesList.appendChild(createAddressItem('пр-т. Советский, д. 8', myCollection.get(4)));
  addressesList.appendChild(createAddressItem('Пионерский, ул. Комсомольская, д. 31', myCollection.get(5)));
  addressesList.appendChild(createAddressItem('ул. Петра Панина, д. 2а', myCollection.get(6)));
  addressesList.appendChild(createAddressItem('ул. Аэропортная, д. 12', myCollection.get(7)));
  addressesList.appendChild(createAddressItem('ул. Автомобильная, д. 22', myCollection.get(8)));
  addressesList.appendChild(createAddressItem('ул. Житомирская, д. 6-8', myCollection.get(9)));
  addressesList.appendChild(createAddressItem('ул. Пролетарская, д. 55', myCollection.get(10)));
  addressesList.appendChild(createAddressItem('ул. Карла Маркса, д. 82', myCollection.get(11)));
  addressesList.appendChild(createAddressItem('ул. Краснооктябрьская, д. 1-7', myCollection.get(12)));
  addressesList.appendChild(createAddressItem('ул. Невского, д. 24-30', myCollection.get(13)));
  addressesList.appendChild(createAddressItem('ул. Черняховского, д. 6А-12А(Океан)', myCollection.get(14)));
  addressesList.appendChild(createAddressItem('ул. Каштановая алеея, д. 157', myCollection.get(15)));
  addressesList.appendChild(createAddressItem('ул. Фрунзе, д. 17-21', myCollection.get(16)));
  addressesList.appendChild(createAddressItem('пр. Московский, д. 231', myCollection.get(17)));
  addressesList.appendChild(createAddressItem('ул. Олега Кошевого, д. 37а', myCollection.get(18)));
  addressesList.appendChild(createAddressItem('ул. Театральная, д. 21, ТЦ Маяк', myCollection.get(19)));
  addressesList.appendChild(createAddressItem('ул. Уральская, д. 18 (ТЦ МЕГА)', myCollection.get(20)));
  addressesList.appendChild(createAddressItem('ул. Нарвская, д. 112', myCollection.get(21)));
  addressesList.appendChild(createAddressItem('пр. Советский, д. 234 (ТЦ Евроспар)', myCollection.get(22)));
  addressesList.appendChild(createAddressItem('пр. Мира, д. 61-63', myCollection.get(23)));
  addressesList.appendChild(createAddressItem('ул. Красносельская, д. 85', myCollection.get(24)));
  addressesList.appendChild(createAddressItem('ул. Космонавта Леонова, д. 55', myCollection.get(25)));
  addressesList.appendChild(createAddressItem('ул. Липовая Аллея, д. 2', myCollection.get(26)));
  addressesList.appendChild(createAddressItem('пр. Советский, д. 8', myCollection.get(27)));
  addressesList.appendChild(createAddressItem('пр. Московский, д. 40, ББЦ', myCollection.get(28)));
  addressesList.appendChild(createAddressItem('ул. Пролетарская, д. 79', myCollection.get(29)));
  addressesList.appendChild(createAddressItem('ул. Куйбышева, д. 91Б', myCollection.get(30)));
  addressesList.appendChild(createAddressItem('ул. Шатурская, д. 5', myCollection.get(31)));
  addressesList.appendChild(createAddressItem('ул. Озёрная, д. 1а', myCollection.get(32)));
  addressesList.appendChild(createAddressItem('ул. Черняховского, д. 15', myCollection.get(33)));
  addressesList.appendChild(createAddressItem('ул. Горького, д. 150', myCollection.get(34)));
  addressesList.appendChild(createAddressItem('ул. Маточкина, д. 2', myCollection.get(35)));
  addressesList.appendChild(createAddressItem('г. Гурьевск ул. Крайняя, д. 1в', myCollection.get(36)));
  addressesList.appendChild(createAddressItem('г. Гурьевск Пражский Бульвар, д. 1ж', myCollection.get(37)));
  addressesList.appendChild(createAddressItem('г. Зеленоградск ул. Окружная, д. 15', myCollection.get(38)));
  addressesList.appendChild(createAddressItem('г. Зеленоградск ул. Железнодорожная, д. 40', myCollection.get(39)));
  addressesList.appendChild(createAddressItem('г. Зеленоградск ул. Тургенева, д. 1б', myCollection.get(40)));
  addressesList.appendChild(createAddressItem('г. Светлогорск пр. Калининградский, д. 2а', myCollection.get(41)));
  addressesList.appendChild(createAddressItem('г. Светлогорск ул. Ленина, д. 20', myCollection.get(42)));





  // Добавляем список на страницу
  let addressesDiv = document.getElementById('addresses');
  addressesDiv.appendChild(addressesList);

  function createAddressItem(name, placemark) {
    let item = document.createElement('li');
    item.textContent = name;
    item.addEventListener('click', function () {
      myMap.setCenter(placemark.geometry.getCoordinates(), 13);
      placemark.balloon.open();
    });
    return item;
  }
}
