import PlayerActions from '../actions/PlayerActions';

export default PreviousButton = React.createClass({
  handleClick() {
    PlayerActions.previous();
  },

  render() {
    return (
      <div className="previous-button" onClick={this.handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    );
  }
});
