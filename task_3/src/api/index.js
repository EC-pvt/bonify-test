import axios from 'axios';

export default {
  getVideos: (query) =>
    axios.get(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&order=date&location=${encodeURIComponent(
        `${query.lat},${query.lng}`
      )}&locationRadius=10mi&type=video&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU`
    ),
  getAddress: (query) =>
    axios.get(
      //'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU'
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodeURIComponent(
        `${query.lat},${query.lng}`
      )}&key=AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU`
    ),
};
