# Weather App

To run the app in your browser, [click
here](https://maretidris.github.io/weather-app/).

## How to run the app on your computer

1. Clone this repo to your computer.
2. Open a terminal and go the folder in which you cloned this repo.
3. Run `npm install`.
4. Run `npm run start_dev`.

- To run the webpack dev server (and open a new Chrome tab), run:

  ```bash
  npm run start_dev
  ```

- To continuously build the project, run:

  ```bash
  npm run build_dev
  ```

## How to deploy this app to maretidris.github.io/weather-app

1. Make the changes in your code.
2. Run `npm run build_dev`.

   - this uses `webpack.dev.config.js` to generate the minified
     bundle that is deployed to the `docs` folder.
   - GitHub Pages is configured to use the files in the `docs` folder
     to serve up the app on `maretidris.github.io/weather-app`.

3. Commit and push!

## Description

This app is for people who have moved to the US from another country that uses Celsius and they are interacting Americans who understand Fahrenheit.

## Design document

Here's a link to a [private design document](https://docs.google.com/document/d/13_ZW_th_fzTK25QX87tPgnZY42bby6AXTkxjpV2LoSg/edit?usp=sharing).

## Designs

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/weather_app.gif)

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/mumbai.png)

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/new_york.png)

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/siberia.png)

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/sunnyvale.png)

![](https://raw.githubusercontent.com/MaretIdris/weather-app/master/designs/tallinn.png)
