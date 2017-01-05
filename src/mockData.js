const data = {
  navigation: [
    {
      text: 'Cats',
      link: '/cats',
    },
    {
      text: 'Cat food',
      link: '/catfood',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Shopping Cart',
      link: '/cart',
    },
  ],
  categories: {
    cats: {
      desc: 'Cats',
      items: [
        {
          text: 'Abyssinian',
          link: 'abyssinian',
        },
        {
          text: 'American Bobtail',
          link: 'american-bobtail',
        },
        {
          text: 'American Curl',
          link: 'american-curl',
        },
        {
          text: 'American Shorthair',
          link: 'american-shorthair',
        },
        {
          text: 'American Wirehair',
          link: 'american-wirehair',
        },
        {
          text: 'Balinese',
          link: 'balinese',
        },
        {
          text: 'Bengal',
          link: 'bengal',
        },
        {
          text: 'Birman',
          link: 'birman',
        },
        {
          text: 'Bombay',
          link: 'bombay',
        },
        {
          text: 'British Shorthair',
          link: 'british-shorthair',
        },
        {
          text: 'Burmese',
          link: 'burmese',
        },
        {
          text: 'Chartreux',
          link: 'chartreux',
        },
        {
          text: 'Cornish Rex',
          link: 'cornish-rex',
        },
        {
          text: 'Cymric',
          link: 'cymric',
        },
        {
          text: 'Devon Rex',
          link: 'devon-rex',
        },
        {
          text: 'Egyptian Mau',
          link: 'egyptian-mau',
        },
        {
          text: 'Exotic Shorthair',
          link: 'exotic-shorthair',
        },
        {
          text: 'Havana Brown',
          link: 'havana-brown',
        },
        {
          text: 'Himalayan',
          link: 'himalayan',
        },
        {
          text: 'Japanese Bobtail',
          link: 'japanese-bobtail',
        },
        {
          text: 'Javanese',
          link: 'javanese',
        },
        {
          text: 'Korat',
          link: 'korat',
        },
        {
          text: 'Maine Coon',
          link: 'maine-coon',
        },
        {
          text: 'Manx',
          link: 'manx',
        },
        {
          text: 'Munchkin',
          link: 'munchkin',
        },
        {
          text: 'Nebelung',
          link: 'nebelung',
        },
        {
          text: 'Norwegian Forest Cat',
          link: 'norwegian-forest-cat',
        },
        {
          text: 'Ocicat',
          link: 'ocicat',
        },
        {
          text: 'Oriental',
          link: 'oriental',
        },
        {
          text: 'Persian',
          link: 'persian',
        },
        {
          text: 'Ragdoll',
          link: 'ragdoll',
        },
        {
          text: 'Russian Blue',
          link: 'russian-blue',
        },
        {
          text: 'Scottish Fold',
          link: 'scottish-fold',
        },
        {
          text: 'Selkirk Rex',
          link: 'selkirk-rex',
        },
        {
          text: 'Siamese',
          link: 'siamese',
        },
        {
          text: 'Siberian',
          link: 'siberian',
        },
        {
          text: 'Singapura',
          link: 'singapura',
        },
        {
          text: 'Snowshoe',
          link: 'snowshoe',
        },
        {
          text: 'Somali',
          link: 'somali',
        },
        {
          text: 'Sphynx',
          link: 'sphynx',
        },
        {
          text: 'Tonkinese',
          link: 'tonkinese',
        },
        {
          text: 'Turkish Angora',
          link: 'turkish-angora',
        },
        {
          text: 'Turkish Van',
          link: 'turkish-van',
        },
      ],
    },
    catfood: {
      desc: 'Cat Food',
      items: [
        {
          text: 'Felix',
          link: 'felix',
        },
        {
          text: 'animonda',
          link: 'animonda',
        },
        {
          text: 'MultiFit',
          link: 'multifit',
        },
        {
          text: 'Miamor',
          link: 'miamor',
        },
        {
          text: 'Kitekat',
          link: 'kitekat',
        },
      ],
    },
  },
  products: {
    cats: [
      {
        name: 'Bubbles',
        slug: 'bubbles',
        category: 'cat',
        race: 'Bengal',
        raceSlug: 'bengal',
      },
      {
        name: 'Bundles',
        slug: 'bundles',
        category: 'cat',
        race: 'Egyptian Mau',
        raceSlug: 'egyptian-mau',
      },
      {
        name: 'Bunny',
        slug: 'bunny',
        category: 'cat',
        race: 'Japanese Bobtail',
        raceSlug: 'japanese-bobtail',
      },
      {
        name: 'Buttercup',
        slug: 'buttercup',
        category: 'cat',
        race: 'Bengal',
        raceSlug: 'bengal',
      },
      {
        name: 'Button',
        slug: 'button',
        category: 'cat',
        race: 'Burmese',
        raceSlug: 'burmese',
      },
      {
        name: 'Chipmunk',
        slug: 'chipmunk',
        category: 'cat',
        race: 'Birman',
        raceSlug: 'birman',
      },
      {
        name: 'Cinnamon',
        slug: 'cinnamon',
        category: 'cat',
        race: 'Snowshoe',
        raceSlug: 'snowshoe',
      },
      {
        name: 'Cuddles',
        slug: 'cuddles',
        category: 'cat',
        race: 'Norwegian Forest Cat',
        raceSlug: 'norwegian-forest-cat',
      },
      {
        name: 'Daisy',
        slug: 'daisy',
        category: 'cat',
        race: 'Turkish Angora',
        raceSlug: 'turkish-angora',
      },
      {
        name: 'Dimples',
        slug: 'dimples',
        category: 'cat',
        race: 'Russian Blue',
        raceSlug: 'russian-blue',
      },
      {
        name: 'Hiccup',
        slug: 'hiccup',
        category: 'cat',
        race: 'Norwegian Forest Cat',
        raceSlug: 'norwegian-forest-cat',
      },
      {
        name: 'Huggie',
        slug: 'huggie',
        category: 'cat',
        race: 'Siberian',
        raceSlug: 'siberian',
      },
      {
        name: 'Jellybean',
        slug: 'jellybean',
        category: 'cat',
        race: 'Himalayan',
        raceSlug: 'himalayan',
      },
      {
        name: 'Jiggles ',
        slug: 'jiggles ',
        category: 'cat',
        race: 'Cymric',
        raceSlug: 'cymric',
      },
      {
        name: 'Jujube ',
        slug: 'jujube ',
        category: 'cat',
        race: 'Korat ',
        raceSlug: 'korat-',
      },
      {
        name: 'Kitkat',
        slug: 'kitkat',
        category: 'cat',
        race: 'Korat ',
        raceSlug: 'korat-',
      },
      {
        name: 'Lollipop ',
        slug: 'lollipop ',
        category: 'cat',
        race: 'American Curl',
        raceSlug: 'american-curl',
      },
      {
        name: 'Marshmallow ',
        slug: 'marshmallow ',
        category: 'cat',
        race: 'Birman',
        raceSlug: 'birman',
      },
      {
        name: 'Munchkin ',
        slug: 'munchkin ',
        category: 'cat',
        race: 'Nebelung',
        raceSlug: 'nebelung',
      },
      {
        name: 'Nibbles',
        slug: 'nibbles',
        category: 'cat',
        race: 'Siberian',
        raceSlug: 'siberian',
      },
      {
        name: 'Nugget',
        slug: 'nugget',
        category: 'cat',
        race: 'Korat ',
        raceSlug: 'korat-',
      },
      {
        name: 'Panda',
        slug: 'panda',
        category: 'cat',
        race: 'Japanese Bobtail',
        raceSlug: 'japanese-bobtail',
      },
      {
        name: 'Peaches ',
        slug: 'peaches ',
        category: 'cat',
        race: 'Singapura',
        raceSlug: 'singapura',
      },
      {
        name: 'Pickles',
        slug: 'pickles',
        category: 'cat',
        race: 'Bengal',
        raceSlug: 'bengal',
      },
      {
        name: 'Pixie ',
        slug: 'pixie ',
        category: 'cat',
        race: 'Scottish Fold',
        raceSlug: 'scottish-fold',
      },
      {
        name: 'Pocket',
        slug: 'pocket',
        category: 'cat',
        race: 'Havana Brown',
        raceSlug: 'havana-brown',
      },
      {
        name: 'Schmoopy ',
        slug: 'schmoopy ',
        category: 'cat',
        race: 'American Shorthair',
        raceSlug: 'american-shorthair',
      },
      {
        name: 'Skittles ',
        slug: 'skittles ',
        category: 'cat',
        race: 'Exotic Shorthair',
        raceSlug: 'exotic-shorthair',
      },
      {
        name: 'Snickers ',
        slug: 'snickers ',
        category: 'cat',
        race: 'Nebelung',
        raceSlug: 'nebelung',
      },
      {
        name: 'Snowball',
        slug: 'snowball',
        category: 'cat',
        race: 'Birman',
        raceSlug: 'birman',
      },
      {
        name: 'Snuggles ',
        slug: 'snuggles ',
        category: 'cat',
        race: 'Javanese',
        raceSlug: 'javanese',
      },
      {
        name: 'Squiggle ',
        slug: 'squiggle ',
        category: 'cat',
        race: 'Siberian',
        raceSlug: 'siberian',
      },
      {
        name: 'Taffy',
        slug: 'taffy',
        category: 'cat',
        race: 'Nebelung',
        raceSlug: 'nebelung',
      },
      {
        name: 'Teacup',
        slug: 'teacup',
        category: 'cat',
        race: 'Bombay',
        raceSlug: 'bombay',
      },
      {
        name: 'Tipsy',
        slug: 'tipsy',
        category: 'cat',
        race: 'Egyptian Mau',
        raceSlug: 'egyptian-mau',
      },
      {
        name: 'Twinkles',
        slug: 'twinkles',
        category: 'cat',
        race: 'Havana Brown',
        raceSlug: 'havana-brown',
      },
      {
        name: 'Velvet',
        slug: 'velvet',
        category: 'cat',
        race: 'American Wirehair',
        raceSlug: 'american-wirehair',
      },
      {
        name: 'Waffles',
        slug: 'waffles',
        category: 'cat',
        race: 'Selkirk Rex',
        raceSlug: 'selkirk-rex',
      },
      {
        name: 'Wiggles',
        slug: 'wiggles',
        category: 'cat',
        race: 'Chartreux',
        raceSlug: 'chartreux',
      },
      {
        name: 'Winky',
        slug: 'winky',
        category: 'cat',
        race: 'Sphynx',
        raceSlug: 'sphynx',
      },
      {
        name: 'Bambi',
        slug: 'bambi',
        category: 'cat',
        race: 'Ocicat',
        raceSlug: 'ocicat',
      },
      {
        name: 'Barbie',
        slug: 'barbie',
        category: 'cat',
        race: 'Balinese',
        raceSlug: 'balinese',
      },
      {
        name: 'Blossom',
        slug: 'blossom',
        category: 'cat',
        race: 'American Curl',
        raceSlug: 'american-curl',
      },
      {
        name: 'Bluebell',
        slug: 'bluebell',
        category: 'cat',
        race: 'Somali',
        raceSlug: 'somali',
      },
      {
        name: 'Calypso',
        slug: 'calypso',
        category: 'cat',
        race: 'Japanese Bobtail',
        raceSlug: 'japanese-bobtail',
      },
      {
        name: 'Cookie',
        slug: 'cookie',
        category: 'cat',
        race: 'American Wirehair',
        raceSlug: 'american-wirehair',
      },
      {
        name: 'Cuddles',
        slug: 'cuddles',
        category: 'cat',
        race: 'Ocicat',
        raceSlug: 'ocicat',
      },
      {
        name: 'Cupcake',
        slug: 'cupcake',
        category: 'cat',
        race: 'Persian',
        raceSlug: 'persian',
      },
      {
        name: 'Daisy',
        slug: 'daisy',
        category: 'cat',
        race: 'Siberian',
        raceSlug: 'siberian',
      },
      {
        name: 'Electra',
        slug: 'electra',
        category: 'cat',
        race: 'Siamese',
        raceSlug: 'siamese',
      },
      {
        name: 'Giggles',
        slug: 'giggles',
        category: 'cat',
        race: 'Turkish Van',
        raceSlug: 'turkish-van',
      },
      {
        name: 'Ginger',
        slug: 'ginger',
        category: 'cat',
        race: 'Korat ',
        raceSlug: 'korat-',
      },
      {
        name: 'Goldilocks',
        slug: 'goldilocks',
        category: 'cat',
        race: 'Korat ',
        raceSlug: 'korat-',
      },
      {
        name: 'Gumdrop',
        slug: 'gumdrop',
        category: 'cat',
        race: 'Cornish Rex',
        raceSlug: 'cornish-rex',
      },
      {
        name: 'Honeybee',
        slug: 'honeybee',
        category: 'cat',
        race: 'American Curl',
        raceSlug: 'american-curl',
      },
      {
        name: 'Jasmine',
        slug: 'jasmine',
        category: 'cat',
        race: 'Oriental',
        raceSlug: 'oriental',
      },
      {
        name: 'Juliette',
        slug: 'juliette',
        category: 'cat',
        race: 'Egyptian Mau',
        raceSlug: 'egyptian-mau',
      },
      {
        name: 'Juniper',
        slug: 'juniper',
        category: 'cat',
        race: 'Turkish Van',
        raceSlug: 'turkish-van',
      },
      {
        name: 'Ladybug',
        slug: 'ladybug',
        category: 'cat',
        race: 'Devon Rex',
        raceSlug: 'devon-rex',
      },
      {
        name: 'Lakshmi',
        slug: 'lakshmi',
        category: 'cat',
        race: 'Selkirk Rex',
        raceSlug: 'selkirk-rex',
      },
      {
        name: 'Misty',
        slug: 'misty',
        category: 'cat',
        race: 'British Shorthair',
        raceSlug: 'british-shorthair',
      },
      {
        name: 'Nutmeg',
        slug: 'nutmeg',
        category: 'cat',
        race: 'Cymric',
        raceSlug: 'cymric',
      },
      {
        name: 'Olympia',
        slug: 'olympia',
        category: 'cat',
        race: 'Siamese',
        raceSlug: 'siamese',
      },
      {
        name: 'Princess',
        slug: 'princess',
        category: 'cat',
        race: 'Burmese',
        raceSlug: 'burmese',
      },
      {
        name: 'Ruby',
        slug: 'ruby',
        category: 'cat',
        race: 'Nebelung',
        raceSlug: 'nebelung',
      },
      {
        name: 'Tiara',
        slug: 'tiara',
        category: 'cat',
        race: 'Turkish Angora',
        raceSlug: 'turkish-angora',
      },
      {
        name: 'Tinkerbell',
        slug: 'tinkerbell',
        category: 'cat',
        race: 'Oriental',
        raceSlug: 'oriental',
      },
      {
        name: 'Trixie',
        slug: 'trixie',
        category: 'cat',
        race: 'Cymric',
        raceSlug: 'cymric',
      },
      {
        name: 'Twinkle',
        slug: 'twinkle',
        category: 'cat',
        race: 'Siberian',
        raceSlug: 'siberian',
      },
      {
        name: 'Venus',
        slug: 'venus',
        category: 'cat',
        race: 'Bombay',
        raceSlug: 'bombay',
      },
      {
        name: 'Amigo',
        slug: 'amigo',
        category: 'cat',
        race: 'Turkish Van',
        raceSlug: 'turkish-van',
      },
      {
        name: 'Banjo',
        slug: 'banjo',
        category: 'cat',
        race: 'American Curl',
        raceSlug: 'american-curl',
      },
      {
        name: 'Cosmo',
        slug: 'cosmo',
        category: 'cat',
        race: 'Chartreux',
        raceSlug: 'chartreux',
      },
      {
        name: 'Crocket',
        slug: 'crocket',
        category: 'cat',
        race: 'Chartreux',
        raceSlug: 'chartreux',
      },
      {
        name: 'Donatello',
        slug: 'donatello',
        category: 'cat',
        race: 'Sphynx',
        raceSlug: 'sphynx',
      },
      {
        name: 'Electro',
        slug: 'electro',
        category: 'cat',
        race: 'Nebelung',
        raceSlug: 'nebelung',
      },
      {
        name: 'Elvis',
        slug: 'elvis',
        category: 'cat',
        race: 'American Shorthair',
        raceSlug: 'american-shorthair',
      },
      {
        name: 'Euripides',
        slug: 'euripides',
        category: 'cat',
        race: 'American Bobtail',
        raceSlug: 'american-bobtail',
      },
      {
        name: 'Figaro',
        slug: 'figaro',
        category: 'cat',
        race: 'Bengal',
        raceSlug: 'bengal',
      },
      {
        name: 'Fonzie',
        slug: 'fonzie',
        category: 'cat',
        race: 'Cymric',
        raceSlug: 'cymric',
      },
      {
        name: 'Galileo',
        slug: 'galileo',
        category: 'cat',
        race: 'Turkish Angora',
        raceSlug: 'turkish-angora',
      },
      {
        name: 'Geronimo',
        slug: 'geronimo',
        category: 'cat',
        race: 'Turkish Angora',
        raceSlug: 'turkish-angora',
      },
      {
        name: 'Hendrix',
        slug: 'hendrix',
        category: 'cat',
        race: 'Bengal',
        raceSlug: 'bengal',
      },
      {
        name: 'Hercules',
        slug: 'hercules',
        category: 'cat',
        race: 'Havana Brown',
        raceSlug: 'havana-brown',
      },
      {
        name: 'Hobbes',
        slug: 'hobbes',
        category: 'cat',
        race: 'Himalayan',
        raceSlug: 'himalayan',
      },
      {
        name: 'Houdini',
        slug: 'houdini',
        category: 'cat',
        race: 'Bombay',
        raceSlug: 'bombay',
      },
      {
        name: 'Lancelot',
        slug: 'lancelot',
        category: 'cat',
        race: 'Manx',
        raceSlug: 'manx',
      },
      {
        name: 'Mars',
        slug: 'mars',
        category: 'cat',
        race: 'Singapura',
        raceSlug: 'singapura',
      },
      {
        name: 'Moses',
        slug: 'moses',
        category: 'cat',
        race: 'Egyptian Mau',
        raceSlug: 'egyptian-mau',
      },
      {
        name: 'Ozzy',
        slug: 'ozzy',
        category: 'cat',
        race: 'Ragdoll',
        raceSlug: 'ragdoll',
      },
      {
        name: 'Pharaoh',
        slug: 'pharaoh',
        category: 'cat',
        race: 'Burmese',
        raceSlug: 'burmese',
      },
      {
        name: 'Picasso',
        slug: 'picasso',
        category: 'cat',
        race: 'Norwegian Forest Cat',
        raceSlug: 'norwegian-forest-cat',
      },
      {
        name: 'Prince',
        slug: 'prince',
        category: 'cat',
        race: 'Chartreux',
        raceSlug: 'chartreux',
      },
      {
        name: 'Rembrandt',
        slug: 'rembrandt',
        category: 'cat',
        race: 'Russian Blue',
        raceSlug: 'russian-blue',
      },
      {
        name: 'Romeo',
        slug: 'romeo',
        category: 'cat',
        race: 'Somali',
        raceSlug: 'somali',
      },
      {
        name: 'Rumi',
        slug: 'rumi',
        category: 'cat',
        race: 'Havana Brown',
        raceSlug: 'havana-brown',
      },
      {
        name: 'Simba',
        slug: 'simba',
        category: 'cat',
        race: 'Burmese',
        raceSlug: 'burmese',
      },
      {
        name: 'Tarzan',
        slug: 'tarzan',
        category: 'cat',
        race: 'Sphynx',
        raceSlug: 'sphynx',
      },
      {
        name: 'Wizard',
        slug: 'wizard',
        category: 'cat',
        race: 'Turkish Angora',
        raceSlug: 'turkish-angora',
      },
      {
        name: 'Zorro',
        slug: 'zorro',
        category: 'cat',
        race: 'British Shorthair',
        raceSlug: 'british-shorthair',
      },
    ],
  },
};

export default data;
