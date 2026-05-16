async function getWeather() {

    const city = document.getElementById("city").value;

    try {

        const response =
        await fetch(`http://localhost:5000/weather/${city}`);

        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {

            document.getElementById("result").innerHTML = `
                <h3>City not found</h3>
            `;

            return;
        }

        let weatherEmoji = "&#9728;";

const condition = data.weather[0].main.toLowerCase();

if (condition.includes("cloud")) {
    weatherEmoji = "&#9729;";
}
else if (condition.includes("rain")) {
    weatherEmoji = "&#127783;";
}
else if (condition.includes("thunder")) {
    weatherEmoji = "&#9928;";
}
else if (condition.includes("snow")) {
    weatherEmoji = "&#10052;";
}
else if (condition.includes("mist") || condition.includes("haze")) {
    weatherEmoji = "&#127787;";
}

        document.getElementById("result").innerHTML = `

            <div class="weather-icon">${weatherEmoji}</div>

            <h2>${data.name}</h2>

            <div class="temp">
                ${data.main.temp} &deg;C
            </div>

            <div class="details">
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            </div>
        `;

    } catch(error) {

        console.log(error);

        document.getElementById("result").innerHTML = `
            <h3> Error fetching weather data</h3>
        `;
    }
}