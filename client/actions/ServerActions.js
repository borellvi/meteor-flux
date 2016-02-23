import AppDispatcher from '../dispatcher/AppDispatcher';

const ServerActions = {
  tracksChanged() {
    AppDispatcher.dispatch({
      actionType: 'TRACKS_CHANGED'
    });
  }
};

export default ServerActions;
