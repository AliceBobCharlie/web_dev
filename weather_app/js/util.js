export function fmtF(n) {
    return `${Math.round(n)}\u00B0 F`;
}

export async function getAddress(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    const response = await fetch(url,{
        headers: {
        'User-Agent': 'MyApp/1.0 (your@email.com)'  // Required by Nominatim
    }});
    if (!response.ok) {throw new Error("Failed to get address")}
    const data= await response.json();
    const addr=data.address;
    return {
        city: addr?.city || addr?.town || addr?.village || addr?.county || null,
        state: addr?.state || null,
        country: addr?.country || null,
    };
}

export const WMO = {
    0: {
        description: "Clear sky",
        day: "wi-day-sunny",
        night: "wi-night-clear"
    },
    1: {
        description: "Mainly clear",
        day: "wi-day-sunny-overcast",
        night: "wi-night-alt-partly-cloudy"
    },
    2: {
        description: "Partly cloudy",
        day: "wi-day-cloudy",
        night: "wi-night-alt-cloudy"
    },
    3: {
        description: "Overcast",
        day: "wi-cloudy",
        night: "wi-cloudy"
    },
    45: {
        description: "Fog",
        day: "wi-fog",
        night: "wi-fog"
    },
    48: {
        description: "Depositing rime fog",
        day: "wi-fog",
        night: "wi-fog"
    },
    51: {
        description: "Light drizzle",
        day: "wi-day-sprinkle",
        night: "wi-night-alt-sprinkle"
    },
    53: {
        description: "Moderate drizzle",
        day: "wi-day-sprinkle",
        night: "wi-night-alt-sprinkle"
    },
    55: {
        description: "Dense drizzle",
        day: "wi-day-sprinkle",
        night: "wi-night-alt-sprinkle"
    },
    56: {
        description: "Light freezing drizzle",
        day: "wi-day-rain-mix",
        night: "wi-night-alt-rain-mix"
    },
    57: {
        description: "Dense freezing drizzle",
        day: "wi-day-rain-mix",
        night: "wi-night-alt-rain-mix"
    },
    61: {
        description: "Slight rain",
        day: "wi-day-rain",
        night: "wi-night-alt-rain"
    },
    63: {
        description: "Moderate rain",
        day: "wi-day-rain",
        night: "wi-night-alt-rain"
    },
    65: {
        description: "Heavy rain",
        day: "wi-day-rain",
        night: "wi-night-alt-rain"
    },
    66: {
        description: "Light freezing rain",
        day: "wi-day-rain-mix",
        night: "wi-night-alt-rain-mix"
    },
    67: {
        description: "Heavy freezing rain",
        day: "wi-day-rain-mix",
        night: "wi-night-alt-rain-mix"
    },
    71: {
        description: "Slight snow",
        day: "wi-day-snow",
        night: "wi-night-alt-snow"
    },
    73: {
        description: "Moderate snow",
        day: "wi-day-snow",
        night: "wi-night-alt-snow"
    },
    75: {
        description: "Heavy snow",
        day: "wi-day-snow",
        night: "wi-night-alt-snow"
    },
    77: {
        description: "Snow grains",
        day: "wi-day-sleet",
        night: "wi-night-alt-sleet"
    },
    80: {
        description: "Slight rain showers",
        day: "wi-day-showers",
        night: "wi-night-alt-showers"
    },
    81: {
        description: "Moderate rain showers",
        day: "wi-day-showers",
        night: "wi-night-alt-showers"
    },
    82: {
        description: "Violent rain showers",
        day: "wi-day-showers",
        night: "wi-night-alt-showers"
    },
    85: {
        description: "Slight snow showers",
        day: "wi-day-snow",
        night: "wi-night-alt-snow"
    },
    86: {
        description: "Heavy snow showers",
        day: "wi-day-snow",
        night: "wi-night-alt-snow"
    },
    95: {
        description: "Thunderstorm",
        day: "wi-day-thunderstorm",
        night: "wi-night-alt-thunderstorm"
    },
    96: {
        description: "Thunderstorm with slight hail",
        day: "wi-day-hail",
        night: "wi-night-alt-hail"
    },
    99: {
        description: "Thunderstorm with heavy hail",
        day: "wi-day-hail",
        night: "wi-night-alt-hail"
    }
};

getAddress(42.3555,-71.0565)
.then(result=>console.log(result));