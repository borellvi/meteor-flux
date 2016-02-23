import Buttons from './Buttons.jsx';
import Info from './Info.jsx'

function getPlayerState() {
  return {
    trackInfo: PlayerStore.getTrack()
  };
}

export default Player = React.createClass({
  getInitialState() {
    return { trackInfo: undefined };
  },

  componentDidMount() {
    PlayerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PlayerStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getPlayerState());
  },

  render() {
    return (
      <div className="player">
        <Buttons />
          {this.state.trackInfo &&
            <Info trackInfo={this.state.trackInfo}/>
          }
      </div>
    );
  }
});
