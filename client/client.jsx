import App from './components/App.jsx';
import ServerActions from './actions/ServerActions';
import SoundCloudService from './services/SoundCloudService';

Meteor.startup(() => {
  Tracks = new Mongo.Collection('tracks');
  Meteor.subscribe('tracks');

  Tracks.find().observe({
    added: () => {
      ServerActions.tracksChanged();
    }
  });

  SoundCloudService.initialize();

  ReactDOM.render(<App />, document.querySelector('.app'));
});
