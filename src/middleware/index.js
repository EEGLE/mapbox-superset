
/**
 * It could be handy to keep a reference on the source and the layers added by the user and
 * not by mapbox style. This object allow to keep this reference.
 */
export default {

  sources: {},
  layers: [],

  /**
   * Add a source (same prototype as mapbox-gl-js).
   */
  addSource(map, id, source) {
    try {
      map.addSource(id, source);
      this.source[id] = source;
    } catch (e) {
      throw e;
    }
  },

  /**
   * Remove a source (same prototype as mapbox-gl-js).
   */
  removeSource(map, id) {
    try {
      map.removeSource(id);
      delete this.sources[id];
    } catch (e) {
      throw e;
    }
  },

  /**
   * Add a source (same prototype as mapbox-gl-js).
   */
  addLayer(map, layer) {
    try {
      map.addLayer(layer);
      this.layers.push(layer);
    } catch (e) {
      throw e;
    }
  },

  /**
   * Remove a layer (same prototy as mapbox-gl-js).
   */
  removeLayer(map, id) {
    try {
      map.removeLayer(id);
      const index = this.layers.findIndex(layer => layer.id === id);
      this.layers.splice(index, 1);
    } catch (e) {
      throw e;
    }
  }
};
