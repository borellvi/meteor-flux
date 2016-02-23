import PlayerActions from '../actions/PlayerActions'

const SoundCloudService = {
  playing: false,

  initialize() {
    SC.initialize({
      client_id: 'YOUR_CLIENT_ID'
    });
  },

  play(track) {
    if (SC.player) {
      SC.player.pause();
    }

    this.playing = true;

    SC.stream(`/tracks/${track.id}`).then((player) => {
      SC.player = player;
      SC.player.play();
      SC.player.on('finish', ()=> {
        PlayerActions.next();
      });
    });
  },

  pause() {
    SC.player.pause();
    this.playing = false;
  },

  isPlaying() {
    return this.playing;
  }
};

export default SoundCloudService;
