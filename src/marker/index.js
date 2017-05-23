import {uniqId} from '../helper/random-id.js';

export default {

  /**
  * Use this as default 'layout' property when not provided.
  */
  defaultLayout: {
    'icon-image': 'marker-11',
    'icon-size': 1.8
  },

  /**
    * Use this as default 'paint' property when not provided.
  */
  defaultPaint: {},

  /**
  * Add a marker (POI) to the location described by lng and lat.
  * Under the hood, a source is created with only one point. This source is styled
  * with the layout and paint properties. The function returns a handle to the marker.
  */
  add(map, {lng, lat}, layout = this.defaultLayout, paint = this.defaultPaint) {
    const srcId = 'mapbox-superset-src' + uniqId();

    map.addSource(srcId, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [lng, lat]
            },
            properties: {}
          }
        ]
      }
    });

    const layerId = 'mapbox-superset-layer' + uniqId();

    map.addLayer({
      id: layerId,
      type: 'symbol',
      source: srcId,
      layout: layout,
      paint: paint
    });

    return {
      layerId: layerId,
      srcId: srcId
    };
  },

  /**
   * Remove the marker described by its handle.
   */
  remove(map, {srcId, layerId}) {
    map.removeSource(srcId);
    map.removeLayer(layerId);
  }
};
