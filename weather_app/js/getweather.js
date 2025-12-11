export function fetchWeather(lat, lon) {
    const url =
        "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${lat}&longitude=${lon}` +
        "&current=temperature_2m,weather_code,is_day" +
        "&daily=temperature_2m_max,temperature_2m_min,weather_code" +
        "&forecast_days=5" +
        "&temperature_unit=fahrenheit" +
        "&timezone=auto";
    return fetch(url).then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
    });
}