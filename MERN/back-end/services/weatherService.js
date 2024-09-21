// services/weatherService.js
const axios = require('axios');

class WeatherService {
  constructor(config) {
    this.config = config;
  }

  async getCurrentWeather(city) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.config.apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données météorologiques:', error);
      throw error;
    }
  }
}

module.exports = WeatherService;
