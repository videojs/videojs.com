export default [{
  name: 'Disney\'s Oceans',
  description: 'Explore the depths of our planet\'s oceans. ' +
    'Experience the stories that connect their world to ours. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
    'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
    'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
    'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
    'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
    'laborum.',
    id: 'disneys-oceans',
  duration: 45,
  sources: [
    { src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
    { src: '//vjs.zencdn.net/v/oceans.webm', type: 'video/webm' },
    { src: "//vjs.zencdn.net/v/oceans.ogv", type: 'video/ogg' }
  ],
  poster: '//vjs.zencdn.net/v/oceans.png',
  thumbnail: [
    {
      srcset: '//vjs.zencdn.net/v/oceans.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//vjs.zencdn.net/v/oceans.png'
    }
  ],
}, {
  name: 'Sintel',
  description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
  id: 'sintel',
  sources: [
    { src: '//d2zihajmogu5jn.cloudfront.net/sintel/master.m3u8', type: 'application/x-mpegurl' },
    { src: '//d2zihajmogu5jn.cloudfront.net/sintel/sintel.mp4', type: 'video/mp4' },
  ],
  duration: 888,
  poster: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/sintel/poster.png'
    }
  ],
}, {
  name: 'Advanced Bip Bop',
  description: "Apple's test HLS stream",
  id: 'bipbop-advanced',
  sources: [
    {
      src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      type: 'application/x-mpegurl'
    }
  ],
  poster: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/poster.png',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/poster.png'
    }
  ],
  duration: 1800,
}, {
  name: "Elephant's Dream (HLS with captions, audio description and chapters)",
  description: 'The film features two men, Proog, who is older and more experienced, and Emo, who is young and nervous, living in a miraculous construction referred to only as "The Machine".',
  id: 'elephantsdream',
  sources: [
    { src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8', type: 'application/x-mpegurl' },
  ],
  duration: 653,
  textTracks: [
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/chapters.en.vtt',
      kind: 'chapters',
      srclang: 'en',
      label: 'English'
    }
  ],
  poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png'
    }
  ],
}, {
  name: "Elephant's Dream (mp4 with separate text track audio description, captions, and chapters)",
  description: 'The film features two men, Proog, who is older and more experienced, and Emo, who is young and nervous, living in a miraculous construction referred to only as "The Machine".',
  id: 'elephantsdreammp4',
  sources: [
    { src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4', type: 'video/mp4' },
    { src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg', type: 'video/ogg' }
  ],
  duration: 653,
  textTracks: [
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt',
      kind: 'captions',
      srclang: 'en',
      label: 'English'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ar.vtt',
      kind: 'captions',
      srclang: 'ar',
      label: 'Arabic'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.sv.vtt',
      kind: 'captions',
      srclang: 'sv',
      label: 'Swedish'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ru.vtt',
      kind: 'captions',
      srclang: 'ru',
      label: 'Russian'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ja.vtt',
      kind: 'captions',
      srclang: 'ja',
      label: 'Japanese'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/descriptions.en.vtt',
      kind: 'descriptions',
      srclang: 'en',
      label: 'English'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/chapters.en.vtt',
      kind: 'chapters',
      srclang: 'en',
      label: 'English'
    },
  ],
  poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png'
    },
  ],
}, {
  name: 'Tears of Steel',
  id: 'tears-of-steel',
  sources: [
    { src: '//d2zihajmogu5jn.cloudfront.net/tears-of-steel/playlist.m3u8', type: 'application/x-mpegurl' },
    { src: '//d2zihajmogu5jn.cloudfront.net/tears-of-steel/tears_of_steel_720p.mp4', type: 'video/mp4' }
  ],
  duration: 733,
  poster: '//d2zihajmogu5jn.cloudfront.net/tears-of-steel/tears_of_steel.jpg',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/tears-of-steel/tears_of_steel.jpg',
      type: 'image/jpeg',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/tears-of-steel/tears_of_steel.jpg'
    },
  ],
}, {
  name: 'Big Buck Bunny',
  description: 'The plot follows a day of the life of Big Buck Bunny when he meets three bullying rodents, Frank (the leader of the rodents), Rinky and Gimera.',
  id: 'big-buck-bunny',
  sources: [
    { src: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8', type: 'application/x-mpegurl' },
    { src: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.mp4', type: 'video/mp4' },
  ],
  duration: 596,
  poster: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png',
  thumbnail: [
    {
      srcset: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png',
      type: 'image/png',
      media: '(min-width: 400px;)'
    },
    {
      src: '//d2zihajmogu5jn.cloudfront.net/big-buck-bunny/bbb.png'
    },
  ],
}];
