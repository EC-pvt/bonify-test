// @import url("https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto:400,700&amp;subset=latin-ext");

// body {
//     font-size:16px;
//     font-family:'Roboto',sans-serif;
//     font-weight:400,
// }

// h1,h2,h3,h4,h5,h6{
//     font-family:'Raleway',sans-serif;
//     font-weight:400,
// }

import axios from 'axios';

export default {
  getVideos: (query) =>
    axios.get(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&order=date&location=${encodeURIComponent(
        `${query.lat},${query.lng}`
      )}&locationRadius=10mi&type=video&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU`
    ),
  getCoordinates: (query) =>
    axios.get(
      //'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU'
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        query
      )}&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU`
    ),
};
