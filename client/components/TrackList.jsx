export default TrackList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tracks: Tracks.find({}).fetch()
    };
  },

  renderTracks() {
    return this.data.tracks.map((track) => {
      return <li key={track._id}>
          <b><a href={track.userUrl} target="_blank">{track.username}  </a></b>
          <a href={track.titleUrl} target="_blank">{track.title}</a>
        </li>;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    let text = this.refs.textInput.value;

    Meteor.call('addTrack', text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  },

  render() {
    return (
      <div className="tracklist">
        <ul>
          {this.renderTracks()}
        </ul>
        <form className="new-track" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="textInput"
            placeholder="Add a new song" />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
});
