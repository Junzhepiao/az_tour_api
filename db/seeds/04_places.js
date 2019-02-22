
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {name: "grand canyon", img: 'https://www.grandcanyonplaza.com/resourcefiles/attractionsmallimages/grand-canyon-national-park-at-arizona-th.jpg'},
        {name: "horseshoe bend", img: 'https://images.unsplash.com/photo-1483086451546-5a971a934123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80'},
        {name: "antelope canyon", img: 'https://d3ne5s9fv9p81l.cloudfront.net/87/f9/636/896/077725782e6fcd6a84087f.jpg?imageView2/5/w/1000/h/560/format/jpg'},
        {name: "sedona", img: 'https://dke464g2e68q8wei-zippykid.netdna-ssl.com/wp-content/uploads/2016/02/Red-Rocks-of-Sedona-11.jpg'},
        {name: "havasu Falls", img: 'https://www.thecanyon.com/images/Havasu-Falls.jpg'},
        {name: "hoover dam", img: 'https://i.imgur.com/2ztkG9c.jpg'},
        {name: "the lights festival", img: 'https://www.theaddisonattampaoaks.com/wp-content/uploads/2018/01/ThinkstockPhotos-491050030.jpg'},
        {name: "sanctuary camelback mountain resort and spa", img: 'https://inception-app-prod.s3.amazonaws.com/YzE0NDk5NmQtNWU2Ny00M2NiLThkZDItZGQ4YTYwMDg4YTY4/content/2017/03/Sanctuary-at-Camelback-Spa-Evening.jpg'},
        {name: "ritz carlton dove mountain ", img: 'https://bloximages.chicago2.vip.townnews.com/tucsonlocalmedia.com/content/tncms/assets/v3/editorial/c/61/c61b31a6-dfd9-11e5-a043-3f031588d0ad/56d5dc94e2c15.image.jpg?resize=931%2C592'}
      ]);
    });
};
