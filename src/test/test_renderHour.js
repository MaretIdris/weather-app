import {testing} from "../renderers";
import {weatherData} from "./test_dummy_data";

function test_renderHour() {
  const hourData = weatherData.hourly.data[1];

  const content = testing.renderHour(hourData);

  console.log(content);
}

// Make this function available in Chrome Dev Tools by making it a global.
window.test_renderHour = test_renderHour;

export {test_renderHour}
