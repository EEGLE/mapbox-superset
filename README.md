# mapbox superset

mapbox super-set is a bunch of functionality used in [eegle.io](https://www.eegle.io).

mapbox super-set works with [mapbog-gl-js](https://www.mapbox.com/mapbox-gl-js/api/).

## Build from source

Simply run `npm install && npm run build`. It will use webpack to bundle ES6 javascript.

## Testing

We use Jest for testing our code. Run `npm test` to start the test runner.

## Script

`npm test` : Run the unit tests  
`npm run build`: bundle the whole library  
`npm run dev:build`: bundle the whole library including the dev files  
`npm run dev:watch`: bundle the whole library including the dev files and rebundle on change  

## Example

### Marker

```javascript
import mapboxSuperset from 'mapbox-superset';

mapboxgl.accessToken = 'MAPBOX_TOKEN';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/basic-v9'
});

map.on('load', () => {
  const eiffelTower = {lng: 2.294694, lat: 48.858093};

  // add the marker to the map
  const marker = mapboxSuperset.marker.add(map, eiffelTower);

  // remove it after 3 seconds
  setTimeout(() => {
    mapboxSuperset.marker.remove(map, marker);
  }, 3000);
});
```
