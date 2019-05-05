$(document).ready(function() {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia29tZXRhNzUiLCJhIjoiY2p2Nm45aGdmMDZsbDRlbWN5dWxzbXY2ZCJ9.PFK_Hg_12JGhlUNpJvbQxg';
  var map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/kometa75/cjv6p4y2l09y41fkcxgp33ake',
    //zoom: 10,
    center: [32, 48.5],
    dragRotate: false,
    pitchWithRotate: false,
    pitch: 0,
    bearing: -1,
    maxBounds: [[21.9, 44.2], [40.5, 52.5]], // bottom, left, right, top
    attributionControl: false,
  }).addControl(
    new mapboxgl.AttributionControl({
      compact: true,
    })
  );

  // controls
  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  // cities
  $('#reset').click(function() {
    //map.jumpTo({center: [32, 48.5], zoom: 0});
    map.easeTo({ center: [32, 48.5], zoom: 0 });
  });
  $('#kiev').click(function() {
    map.flyTo({ center: [30.526886, 50.449635], zoom: 10 });
  });
  $('#dnipro').click(function() {
    map.flyTo({ center: [35.04364, 48.467458], zoom: 10 });
  });
  $('#lviv').click(function() {
    map.flyTo({ center: [24.038086, 49.841525], zoom: 10 });
  });

  // localization
  $('#ua').click(function() {
    map.setLayoutProperty('country-label', 'text-field', ['get', 'name']);
    map.setLayoutProperty('place-city-label', 'text-field', ['get', 'name']);
    map.setLayoutProperty('place-town-village-hamlet-label', 'text-field', [
      'get',
      'name',
    ]);
    map.setLayoutProperty('place-neighborhood-suburb-label', 'text-field', [
      'get',
      'name',
    ]);
    map.setLayoutProperty('poi-label', 'text-field', ['get', 'name']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name']);
  });
  $('#en').click(function() {
    map.setLayoutProperty('country-label', 'text-field', ['get', 'name_en']);
    map.setLayoutProperty('place-city-label', 'text-field', ['get', 'name_en']);
    map.setLayoutProperty('place-town-village-hamlet-label', 'text-field', [
      'get',
      'name_en',
    ]);
    map.setLayoutProperty('place-neighborhood-suburb-label', 'text-field', [
      'get',
      'name_en',
    ]);
    map.setLayoutProperty('poi-label', 'text-field', ['get', 'name_en']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name_en']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name_en']);
  });
  $('#ru').click(function() {
    map.setLayoutProperty('country-label', 'text-field', ['get', 'name_ru']);
    map.setLayoutProperty('place-city-label', 'text-field', ['get', 'name_ru']);
    map.setLayoutProperty('place-town-village-hamlet-label', 'text-field', [
      'get',
      'name_ru',
    ]);
    map.setLayoutProperty('place-neighborhood-suburb-label', 'text-field', [
      'get',
      'name_ru',
    ]);
    map.setLayoutProperty('poi-label', 'text-field', ['get', 'name_ru']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name_ru']);
    map.setLayoutProperty('road-label', 'text-field', ['get', 'name_ru']);
  });
});
