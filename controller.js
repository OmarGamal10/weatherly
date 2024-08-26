import * as model from "./model.js";
import * as view from "./view.js";

(function () {
  view.addQueryHandler(queryController);
})();

async function queryController(query) {
  try {
    if (!query) return;
    await model.loadWeather(query);
    view.render(model.state);
  } catch (err) {
    console.log(err);
  }
}
