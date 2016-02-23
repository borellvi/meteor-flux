if (Meteor.isServer) {
  Tracks = new Mongo.Collection('tracks');

  Meteor.methods({
    getTracks() {
      return Tracks.find().fetch();
    },

    addTrack(id) {
      try {
        let result = HTTP.get(`http://api.soundcloud.com/resolve?url=${id}&client_id=YOUR_CLIENT_ID&format=json`);
        Tracks.insert({
          id: result.data.id,
          username: result.data.user.username,
          title: result.data.title,
          titleUrl: result.data.permalink_url,
          userUrl: result.data.user.permalink_url
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  Meteor.publish('tracks', () => {
    return Tracks.find();
  });
}
