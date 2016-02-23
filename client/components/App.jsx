import TrackList from './TrackList.jsx';
import Player from './Player.jsx';

export default App = React.createClass({
  render() {
    return (
      <div className="main">
        <div className="text">Meteor Vibe</div>
        <a className="soundcloud" href="https://soundcloud.com" target="_blank"></a>
        <TrackList />
        <Player />
      </div>
    );
  }
});
