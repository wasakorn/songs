import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "In The Name Of God", duration: "4:50" },
    { title: "Overture", duration: "5:00" },
    { title: "Dance of Eternity", duration: "4:00" },
    { title: "As I Am", duration: "5:50" },
    { title: "Stream of Consciousness", duration: "6:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
