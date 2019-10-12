import {testing} from "../renderers";
import {weatherData} from "./test_dummy_data";

function test_renderDay() {
  const content = testing.renderDay(weatherData, 0);
  console.log(content);
}

window.test_renderDay = test_renderDay;

export {test_renderDay};
