<h1>JavaScript<h1>

<h2>Handleing Map with Mapbox</h2>

<h3>drawing lines on map</h3>
<p>what you need to prepare</p>
<pre>$ npm install mapbox-gl -save</pre>

<p>This is an example of how to put lines on Map using Mapbox and Vue 2.</p>

<pre>&lt;template&gt;
&lt;div id="mapContainer" class="map"&gt;&lt;/div>
&lt;/template&gt;

&lt;script&gt;
//https://dev.to/hmintoh/how-to-mapbox-with-vue-js-2a34
//https://www.mapbox.com/install/javascript/complete
import mapboxgl from 'mapbox-gl'

const points = [
[
    [139.50,30],
    [139.50,40],
],
[
    [139.59,30],
    [139.59,40],
],
[
    [139.68,30],
    [139.68,40],
],
[
    [130,35.695],
    [150,35.695],
],
[
    [130,35.7],
    [150,35.7],
],
[
    [130,35.705],
    [150,35.705],
],
]

export default {
    name: "MapView",
    data() {
        return {
        accessToken: "your_access_token"
        };
},

mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
    container: "mapContainer",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [139.5993801, 35.7037511], 
    zoom: 12,
    });

    map.on("load",()=>{
    for (var i=0;i<6;i++) {
        map.addLayer({
        'id':'route'+String(i),
        'type':'line',
        'source':{
            'type':'geojson',
            'data':{
            'type':'Feature',
            'geometry':{
                'type': 'LineString',
                'coordinates':points[i]
            }
            }
        },
        'paint': {
            'line-color':'#0c7',
            'line-width':3,
        }
        });
    }

    });
    
}

};
&lt;/script&gt;


&lt;style lang="scss" scoped&gt;
.basemap {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</pre>