import AppDispatcher from '../dispatcher/AppDispatcher';

const PlayerActions = {
  play() {
    AppDispatcher.dispatch({
      actionType: 'PLAY'
    });
  },

  pause() {
    AppDispatcher.dispatch({
      actionType: 'PAUSE'
    });
  },

  next() {
    AppDispatcher.dispatch({
      actionType: 'NEXT'
    });
  },

  previous() {
    AppDispatcher.dispatch({
      actionType: 'PREVIOUS'
    });
  }
};

export default PlayerActions;
