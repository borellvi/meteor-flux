import PreviousButton from './PreviousButton.jsx';
import PauseButton from './PauseButton.jsx';
import PlayButton from './PlayButton.jsx';
import NextButton from './NextButton.jsx';
import PlayerStore from '../stores/PlayerStore';

function getPlayerState() {
  return {
    isPlaying: PlayerStore.isPlaying()
  };
}

export default Buttons = React.createClass({
  getInitialState() {
    return getPlayerState();
  },

  componentDidMount() {
    PlayerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PlayerStore.removeChangeListener(this._onChange);
  },

  _onChange()  {
    this.setState(getPlayerState());
  },

  render() {
    return (
      <div className="buttons">
        <PreviousButton />
        {(this.state.isPlaying ? <PauseButton /> : <PlayButton />)}
        <NextButton />
      </div>
    );
  }
});
