# Frontend Team Lead Challenge

## Question 3

#### YouTube videos by location

To run the app, just move into `task_3` folder and run `npm i` and `npm start`

#### Features
The app allows to select locations on the map by clicking, and to retrieve the last 5 videos uploaded in a 10miles range. The location of the click is determined in a *most significative metropolitan area*, to avoid looking on too specific addresses which I suppose is not the purpose of the app.
Selected locations are stored and, through a navigation system, can be browsed back and forth.
Videos fetched from YouTube are playable inside the app itself.

#### Development
The app is developed on an up-to-date React environment built from scratch.
Besides the React, babel, webpack, jest/enzyme, lint *standard* dependencies, the app includes in production:
- **axios** to handle api calls
- **redux** and **redux-saga** to handle application store and calls to async sagas
- **styled-components** for styling
- **google-maps-react** to handle the map implementation

The main container is Home, in which are contained the sub-components handling the map, the locations history, and the video table.

When the user clicks on the map, an action containing the coordinates is dispatched and GoogleMaps api is called to obtain a *significant* address, then YouTube api is called with the coordinates to get the latest videos uploaded by location.
When navigating through the locations history, the user dispatches an action which sets a previous/next location to active and refetch the videos for the now active location.

###### Possible TO-DOs
- Locations history table should be interactive, to allow direct navigation to specific location
- Test coverage should be **WAY MORE** complete, test are just there as sample tests
- Error handling in adding locations or fetching videos should be better implemented

