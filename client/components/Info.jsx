import PlayerStore from '../stores/PlayerStore';

export default Info = React.createClass({
  render() {
    return (
      <div className="info">
        <b><a href={this.props.trackInfo.userUrl} target="_blank">{this.props.trackInfo.username}  </a></b>
        <a href={this.props.trackInfo.titleUrl} target="_blank">{this.props.trackInfo.title}</a>
      </div>
    );
  }
});
