/* =========================================
   ALANDI MAULI MAP - DETAILED VERSION
========================================= */

// 1. LOCATIONS
const templeLocation = [18.6775, 73.8970];
const ghatLocation = [18.6790, 73.8960];

// 2. CREATE MAP
const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
    minZoom: 15,
    maxZoom: 20,
    maxBoundsViscosity: 1.0
});

// 3. NORMAL STREET MAP
L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    {
        attribution: "Map tiles © Esri",
        maxNativeZoom: 18,
        maxZoom: 20,
        minZoom: 15
    }
).addTo(map);

// 4. CUSTOM MARKER ICONS
const templeIcon = L.divIcon({
    className: "place-marker",
    html: "<div style='font-size:30px;'>🛕</div>",
    iconSize: [38, 38],
    iconAnchor: [19, 32]
});

const ghatIcon = L.divIcon({
    className: "place-marker",
    html: "<div style='font-size:30px;'>🌊</div>",
    iconSize: [38, 38],
    iconAnchor: [19, 32]
});

// 5. MAULI MANDIR MARKER
const templeMarker = L.marker(templeLocation, {
    icon: templeIcon
}).addTo(map);

templeMarker.bindPopup(`
<div class="simple-popup" style="width:280px; max-height:350px; overflow-y:auto;">

    <h2>🛕 श्री संत ज्ञानेश्वर महाराज समाधी मंदिर</h2>

    <p><b>स्थान:</b> आळंदी, जिल्हा पुणे, महाराष्ट्र</p>

    <hr>

    <h3>📜 मंदिराचा इतिहास</h3>
    <p>
    संत ज्ञानेश्वर महाराज हे महाराष्ट्रातील महान संत,
    तत्त्वज्ञ आणि कवी होते. त्यांनी भगवद्गीतेवर
    मराठी भाषेत ज्ञानेश्वरी हा ग्रंथ लिहिला.
    परंपरेनुसार त्यांनी इ.स. 1296 मध्ये आळंदी येथे
    संजीवन समाधी घेतली.
    </p>

    <h3>🙏 समाधीचे महत्त्व</h3>
    <p>
    या मंदिरात संत ज्ञानेश्वर महाराजांची समाधी आहे.
    वारकरी संप्रदायासाठी हे अत्यंत पवित्र तीर्थक्षेत्र
    मानले जाते. भाविक येथे दर्शनासाठी येतात.
    </p>

    <h3>📚 महत्त्वाचे ग्रंथ</h3>
    <ul>
        <li>ज्ञानेश्वरी</li>
        <li>अमृतानुभव</li>
        <li>हरिपाठ</li>
    </ul>

    <h3>🏛️ मंदिर परिसर</h3>
    <ul>
        <li>संत ज्ञानेश्वर महाराज समाधी</li>
        <li>सिद्धेश्वर मंदिर</li>
        <li>हैबतबाबा मंदिर</li>
        <li>मुक्ताई मंदिर</li>
        <li>विठ्ठल-रुक्मिणी मंदिर</li>
        <li>पुंडलिक मंदिर</li>
    </ul>

    <h3>🎉 प्रमुख उत्सव</h3>
    <p>
    कार्तिकी वारी, संजीवन समाधी सोहळा आणि
    आषाढी वारीसाठी निघणारा संत ज्ञानेश्वर महाराजांचा
    पालखी सोहळा हे येथील महत्त्वाचे धार्मिक कार्यक्रम आहेत.
    </p>

    <h3>🌊 इंद्रायणी नदी</h3>
    <p>
    मंदिराजवळ इंद्रायणी नदी आणि तिचे घाट आहेत.
    अनेक भाविक मंदिर दर्शनासोबत घाटालाही भेट देतात.
    </p>

    <hr>

    <p><b>📍 पत्ता:</b> प्रदक्षिणा रोड, महाद्वार रोड,
    आळंदी, महाराष्ट्र 412105</p>

    <a href="https://www.google.com/maps/dir/?api=1&destination=18.6775,73.8970"
       target="_blank" rel="noopener noreferrer">
       Google Maps वर दिशा पहा
    </a>

</div>
`);

// 6. ALANDI GHAT MARKER
const ghatMarker = L.marker(ghatLocation, {
    icon: ghatIcon
}).addTo(map);

ghatMarker.bindPopup(`
<div class="simple-popup" style="width:250px;">
    <h2>🌊 आळंदी घाट</h2>
    <p>
    इंद्रायणी नदीच्या काठावर असलेला हा घाट
    मंदिर परिसराचा महत्त्वाचा भाग आहे.
    भाविक येथे दर्शनासाठी आणि धार्मिक विधींसाठी येतात.
    </p>

    <a href="https://www.google.com/maps/dir/?api=1&destination=18.6790,73.8960"
       target="_blank" rel="noopener noreferrer">
       Google Maps वर दिशा पहा
    </a>
</div>
`);

// 7. 300 METRE CIRCLE
const areaCircle = L.circle(templeLocation, {
    radius: 300,
    color: "#df812e",
    weight: 2,
    fillColor: "#f4b36f",
    fillOpacity: 0.10
}).addTo(map);

// 8. FIT MAP TO AREA
const areaBounds = areaCircle.getBounds();

map.fitBounds(areaBounds, {
    padding: [25, 25]
});

// 9. LIMIT MAP MOVEMENT
map.setMaxBounds(areaBounds.pad(0.12));

// 10. QUICK PLACE BUTTONS
function goToPlace(type) {

    if (type === "temple") {
        map.setView(templeLocation, 18);
        templeMarker.openPopup();
    }

    if (type === "ghat") {
        map.setView(ghatLocation, 18);
        ghatMarker.openPopup();
    }
}

// 11. FIX MAP DISPLAY
map.whenReady(function () {
    setTimeout(function () {
        map.invalidateSize();
        map.fitBounds(areaBounds, {
            padding: [25, 25]
        });
    }, 300);
});

// 12. CONSOLE MESSAGE
console.log("Alandi Mauli Map Loaded");
console.log("Detailed temple information enabled");
console.log("Maximum zoom: 20");