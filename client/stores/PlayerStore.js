import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SoundCloudService from '../services/SoundCloudService';

const CHANGE_EVENT = 'change';

let current = 0;
let playerTracks = [];

function updateTracks() {
  Meteor.call('getTracks', (error, trackList) => {
    playerTracks = trackList;
  });
}

function nextTrack() {
  if (current === playerTracks.length - 1) {
    current = 0;
  } else {
    current++;
  }
}

function previousTrack() {
  if (current === 0) {
    current = playerTracks.length - 1;
  } else {
    current--;
  }
}

function currentTrack() {
  return playerTracks[current];
}

function play() {
  SoundCloudService.play(currentTrack());
}

function next() {
  nextTrack();
  play();
}

function previous() {
  previousTrack();
  play();
}

function pause() {
  SoundCloudService.pause();
}

export default PlayerStore = Object.assign(EventEmitter.prototype, {
  isPlaying() {
    return SoundCloudService.isPlaying();
  },

  getTrack() {
    return currentTrack();
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.addListener(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'PLAY':
      play();
      PlayerStore.emitChange();
      break;
    case 'PAUSE':
      pause();
      PlayerStore.emitChange();
      break;
    case 'NEXT':
      next();
      PlayerStore.emitChange();
      break;
    case 'PREVIOUS':
      previous();
      PlayerStore.emitChange();
      break;
    case 'TRACKS_CHANGED':
      updateTracks();
      PlayerStore.emitChange();
      break;
  }
});
