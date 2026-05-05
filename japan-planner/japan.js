window.showCity = function(city){

    const result = document.getElementById("result");

    if(city === "tokyo"){
        result.innerHTML =
        "<div class='city-content'>" +

        "<h2>Tokyo</h2>" +

        "<p>Tokyo is the capital of Japan and one of the most advanced cities in the world. It blends futuristic technology with deep-rooted traditions.</p>" +

        "<h3>Top Places</h3>" +
        "<ul>" +
            "<li>Shibuya Crossing</li>" +
            "<li>Shinjuku</li>" +
            "<li>Akihabara</li>" +
        "</ul>" +

        "<h3>Vibe</h3>" +
        "<p>Fast-paced, modern, ambitious, energetic</p>" +

        "</div>";
    }

};

