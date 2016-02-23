import PlayerActions from '../actions/PlayerActions';

export default NextButton = React.createClass({
  handleClick() {
    PlayerActions.next();
  },

  render() {
    return (
      <div className="next-button" onClick={this.handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    );
  }
});
