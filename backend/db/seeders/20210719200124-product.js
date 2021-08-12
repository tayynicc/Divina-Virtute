'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Products', [
        {
        ownerId:1 ,
        title:'Opalite Moon Crystal Healing Stone Crescent Moon Shape',
        tagLine:'Black Obsidian / Metaphysical Carving Gemstone Opal ',
        discription:'Sizes and shapes differ slightly, sizes range from 30 - 35 mm. Surface is bumpy on both sides and moon is puffy so its\'s thicker in the center and thinner towards the edges.',
        price:.22,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image1.png',
        purchaseLink:'https://www.etsy.com/listing/792634952/opalite-moon-crystal-healing-stone?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=crystals&ref=sr_gallery-1-13&organic_search_click=1&pro=1',
        collectionTag:'Unique Shape'
    },
    {
        ownerId:1,
        title:'OPAL Cabochon - Oval, Orange with Flash',
        tagLine:'This Opal has an orange or dark orange/brown base and flashes of various colors.',
        discription:'Gems and crystals are great for altars, grids, terrariums, pocket stones, gifts, home decorating, collecting and more!',
        price:19.95,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image2.png',
        purchaseLink:'https://www.etsy.com/listing/1045617291/opal-cabochon-oval-orange-with-flash?ref=listing_page_ad_row-4&plkey=cdf6c30d6fc1e71e86d66662ec2f259d41c978dd%3A1045617291&pro=1&frs=1',
        collectionTag:'Opal'
    },
    {
        ownerId:1,
        title:'Beginners Crystal Kit, 10 pcs In Velvet Pouch',
        tagLine:'This \'Beginners\' Set has crystals selected that we view as the foundation of any collection.',
        discription:'Selected for their beauty, energy and popularity, each stone represents key areas of the crystal world. Learn about each specimens energies and properties seeing which one resonates with you. A perfect introduction to crystals or just a beautiful addition to any collection at an unbeatable value. Each piece is hand selected for its quality and size.',
        price:35.95,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image3.png',
        purchaseLink:'https://www.etsy.com/listing/739846633/beginners-crystal-kit-10-pcs-in-velvet?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=crystals&ref=sr_gallery-1-2&organic_search_click=1&frs=1&bes=1',
        collectionTag:'Kits'
    },
    {
        ownerId:2,
        title:'Blue Celestite Cluster',
        tagLine:'Celestite is a sweet blue crystal, with a lovely gentle uplifting vibration. ',
        discription:'A cluster of this lovely blue stone in your room is excellent for youor emotional state as it is calming and uplifting.',
        price:14.99,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image4.png',
        purchaseLink:'https://www.etsy.com/listing/829633599/celestite-blue-celestite-cluster-healing?ref=internal_similar_listing_bot-6&pro=1&frs=1',
        collectionTag:'Raw'
    },
    {
        ownerId:2,
        title:'Raw Aragonite Star Cluster',
        tagLine:'Starbust Aragonite Cluster', 
        discription:'Aragonite is a stabilising stone that centres and grounds physical energies, being useful in time of stress. It helps to prepare for meditation and stabilises spiritual development. It provides insight into the causes of problems and situations. Aragonite aids concentration and brings tolerance and flexibility to the mind. It teaches acceptance and patience, especially helpful to those who feel they have too much responsibility. Aragonite provides strength and support, helping to combat anger and emotional stress. Aragonite is attuned to the Earth Goddess, encouraging conservation and recycling. It is a reliable earth-healer and grounding stone. Aragonite transforms geopathic stress. Aragonite brings warmth to the extremities. It combats deficiencies in Vitamins A and D. Aragonite combats dis-ease and can stop night twitches and muscle spasms. It also helps with general aches and pains.',
        price:12.99,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/Screenshot+(131).png',
        purchaseLink:'https://www.etsy.com/listing/850644002/aragonite-cluster-aragonite-cluster-raw?ref=related-3&pro=1&frs=1',
        collectionTag:'Raw'
    },
    {
        ownerId:3,
        title:'Angel Phantom Quartz',
        tagLine:'This stone will open your Crown Chakra and Third Eye and open your ability to Channel and work with ethereal entities, spirits and energies.',
        discription:'The metaphysical properties of Angel Phantom Quartz (also known as Amphibole) are quite alive; it is a powerful stone which aligns you with the Angelic forces of the Universe. Through work with this stone you can become more greatly in tune with your Guardian Angels and be more acutely aware of the presence of spirit guides and ancestors. ',
        price:193.50,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image5.png',
        purchaseLink:'https://crystalgemstoneshop.com/collections/angel-phantom-quartz/products/angel-phantom-quartz-amphibole-unique-specimens',
        collectionTag:'Raw'
    },
    {
        ownerId:3,
        title:'Bisthum Gemstone collect',
        tagLine:'THE STONE OF CLARITY & FOCUS',
        discription:'Bismuth creates a solid and cohesive environment for understanding more advanced principles of magick. It is a gemstone that provides focus, clarity and connection with your spiritual self; allowing for revelations and power.',
        price:4.50,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__images6.png',
        purchaseLink:'https://crystalgemstoneshop.com/collections/bismuth/products/bismuth-gemstone-large-the-stone-of-clarity-focus',
        collectionTag:'Raw'
    },
    {
        ownerId:3,
        title:'Blue Lace Agate',
        tagLine:'Marbled in pastel-shades of blue, Blue Lace Agate is a beautiful stone that has incredible countenance in the gemstone world.  ',
        discription:' Its lacy appearance ebbs and flows with lilac-blue to sky-blue tones and is a stone praised for its ability to unearth your inner voice.  It is a gem that provides clarity and earnest wisdom when worked with. These gemstones are polished, smooth, flat, and perfect for carrying in your pocket, purse, or easily worked with in crystal healing practices. You will receive 1 bag of gemstones, 1 ounce, the individual stones are approximately 0.7"-1.5" on the longest side. Pictured is an example of 1 ounce',
        price:18.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image7.png',
        purchaseLink:'https://crystalgemstoneshop.com/collections/blue-lace-agate/products/blue-lace-agate-natural-gemstone-slice-slab-by-the-bag',
        collectionTag:'Tumbled Stones'

    },
    {
        ownerId:4,
        title:'Tangerine aura quartz',
        tagLine:'Tangerine aura quartz is your gateway to spiritual discovery and exploration.',
        discription:'It is a stone you can meditate, wear and work with that brings out your natural connection and bond with the Spiritual Realm. With this gemstone you can discover greater paths about yourself and your future. The power of the stone clears negative energy and dissolves cloud energy that causes bad moods. The luminescent powers of the stone gives off a stabilizing energy that makes you feel more at ease and comfortable with your surroundings. It is a great stone for adaptation to change. With tangerine aura quartz you form a tighter bond between your 3 bodies for inter-communication and interaction. You will find your bodies engage one another at a higher rate of power. The stone clears blockages from your Third Eye and lifts restrictions within your Third Eye for receiving prophetic visions. When you work with tangerine aura quartz it will activate all of your DNA bringing forward your paranormal DNA for change and morphing within your daily life. The stone brings courage, bravery and endurance for victory in difficult situations; making it a precious resource for those going through any psychic or emotional trauma.',
        price:15.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image8.png',
        purchaseLink:'https://crystalgemstoneshop.com/collections/tangerine-aura-quartz/products/tangerine-aura-quartz-gemstone-pendant',
        collectionTag:'Jewlrey'
    },
    {
        ownerId:4,
        title:'Tumbled Yellow Obsidian',
        tagLine:'STONE OF CLEARING NEGATIVE ENERGY',
        discription:'Yellow Obsidian is a powerful stone that burns away negative energy and promotes a well-balanced atmosphere.',
        price:2.95,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image9.png',
        purchaseLink:'https://crystalgemstoneshop.com/collections/yellow-obsidian/products/yellowobsidian',
        collectionTag:'Tumbled Stones'
    },
    {
        ownerId:4,
        title:'Polychrome Jasper Free Form',
        tagLine:'Vibrant and vivacious, Polychrome Jasper\'s energy can hardly be kept still.',
        discription:'Its green, gold, and scarlet hues transport you to the deserts of its Madagascar origin and infuse the soul with fire and passion.',
        price:56.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image10.png',
        purchaseLink:'https://selenestone.com/collections/new-crystals/products/polychrome-jasper-free-form?variant=39409480106055',
        collectionTag:'Tumbled Stones'
    },
    {
        ownerId:4,
        title:'Small Smoky Quartz Polished Point',
        tagLine:'REPELS NEGATIVE ENERGY - PROTECTION - GROUNDING',
        discription:'Smoky Quartz is kinda like a metaphysical houseplant; using its shadowy aesthetic to absorb and purify energies while returning the clear, positive vibes back to the earth.',
        price:18.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image11.png',
        purchaseLink:'https://selenestone.com/collections/new-crystals/products/small-smoky-quartz-polished-point',
        collectionTag:'Point'
    },
    {
        ownerId:4,
        title:'Amethyst Druzes', 
        tagLine:'Whether you\'re new to crystals or a devoted expert, Amethyst is the O.G.',
        discription:'What can\'t Amethyst do? Transcending to a higher consciousness, Amethyst attracts strength and boosts mental clarity while deflecting demons of fear, stress, and depression. In fact, it has been known to absorb negative energies from the body and reflect it as a deeper color within its peaks. Helpful for addictions and unhealthy attachments, Amethyst encourages distance from patterns that are no longer serving you. We love Amethyst as a thoughtful, meaningful gift for nearly all big life events.',
        price:273.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image13.png',
        purchaseLink:'https://selenestone.com/collections/clusters/products/amethyst-druzes?variant=32691631226951',
        collectionTag:'Geode'
    },
    {
        ownerId:1,
        title:'Tourmaline Quartz',
        tagLine:'REPELS NEGATIVE ENERGY - PROTECTION - GROUNDING',
        discription:'This stone is the be-all and say-all of all protection stones. If your bad vibes were a swarm of mosquitos around you sucking your blood and draining your energy, this stone is like a giant can of bug spray! Place this powerful stone near your doors or entry points to your sacred spaces to act as a barrier for bad energy and keep it from entering your safe spaces. Feeling negative yourself? Put it in your pocket, in your purse, or on your desk and watch as this powerful point elevates your entire being. This stone is a GAME-CHANGER!',
        price:8.99,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image14.png',
        purchaseLink:'https://zengems.co/collections/crystal-points/products/tourmaline-crystal-point',
        collectionTag:'Point'

    },
    {
        ownerId:2, 
        title:'Positivity & Serenity Pillar Gift Bundle Set',
        tagLine:'Each gemstone is individually hand-picked and inspected for quality. Although each crystal is unique and varies in size, we carefully balance each kit\'s equilibrium and energy before packing.',
        discription:'This Positivity crystal set is the perfect gift for crystal collectors and enthusiasts, vibrational healers, reiki therapists, and other energy workers.',
        price:44.99,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image15.png',
        purchaseLink:'https://zengems.co/collections/bundles/products/healing-pillar-gift-bundle',
        collectionTag:'Kits'


    },
    {
        ownerId:2,
        title:'Agate Plate',
        tagLine:'Measures approx. 4 inches and will come in a blue tone.',
        discription:'Agate plates are perfect for placing a candle, herbs and stones on for use as a jewelry ring tray. Also can be used as a charging plate for setting your crystals in the moonlight.',
        price:7.25,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image16.png',
        purchaseLink:'https://tamedwild.com/collections/crystals-stones/products/agate-plates',
        collectionTag:'Slice'
    },
    {
        ownerId:3,
        title:'Florite Worry Stone',
        tagLine:'Multiple colors shine through in the rainbow fluorite worry stone.',
        discription:'Multiple colors shine through in the rainbow fluorite worry stone. Fully polished with a concave indentation on one side. Measures 1.81" X 1.23" X .46".',
        price:22.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image17.png',
        purchaseLink:'https://www.exquisitecrystals.com/fluorite-worry-stone-209-jak-06',
        collectionTag:'Worry Stones'
    },
    {
        ownerId:2,
        title:'Fairy Quartz Crystal-23',
        tagLine:'A Mystical Experience',
        discription:'These crystals are from Africa and have been called by many names, such as pineapple quartz, cactus quartz, fairy quartz; and spirit quartz. Whatever you want to call them is fine with me. They range in size from 1+ inches up to over 5 inches inches; and are priced according to size, not quality. They are all from the same collection; and many have citrine/iron inclusions. They are basically amethyst crystals with smaller (druzy) crystals growing on the larger crystal. For expanded view and sizes; and secure order cart, simply click the photo of your selection.',
        price:89.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__fairy-quartz-19-3.png',
        purchaseLink:'http://www.quartzcrystals.net/fairy-20.htm',
        collectionTag:'Raw'
    },
    {
        ownerId:3,
        title:'Purple Fluorite Cube 2 Inch',
        tagLine:'UNIVERSAL CONSCIOUSNESS, COORDINATION, CLEARING, BALANCE Comes with a fluorite crystal collectors card. 106 grams, 2 x 2 Inch.',
        discription:'WHY To tether the soul to that which gives it meaning. To provide a sense of connection to the human whole. To integrate the psychic with the physical. To cleanse the aura of lower vibrations HOW Fluorite deepens its guardian/’s connection with the spiritual plane, elevating consciousness and guarding against psychic manipulation. This stone makes for fluid communication between physical and spiritual planes, aiding its guardian in their pursuit of a fully integrated human experience. WHERE Fluorite is known for its use with the third eye (in between brows) and crown (top of head) chakras, allowing for the release of negative psychic energy. This stone is also known for its ability to aid in strengthening bones and teeth.MANTRA I am connected to the root of what fuels my purpose. ',
        price:64.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__purple-flo-19-3.png',
        purchaseLink:'https://www.crystals.com/products/purple-fluorite-106?variant=39263096635426&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjwi9-HBhACEiwAPzUhHMsxkskxMwigWxC_xvK6wvLSqGzuxmeClvtb7cV_URN761RWZkCOUxoCLTgQAvD_BwE',
        collectionTag:'Raw'
    },
    {
        ownerId:1,
        title:'Malachite Freeform',
        tagLine:'Stone of transformation.',
        discription:' Clears and activates all chakras. Aids in clarifying the emotions and releasing negative experiences. Stimulates intuition. It is extremely protective. Helps one look deep within to see who one really is. When it crumbles, bury it in a sacred place – its work is done.',
        price:276.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Mala-free-20-1.png',
        purchaseLink:'https://mysticelements.shop/products/malachite-freeform?variant=32319926501438&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2020-04-17&utm_source=google&utm_medium=smart_campaign&gclid=CjwKCAjwi9-HBhACEiwAPzUhHK4BpQhgUczpcBLrjTfcH0aH_dEQYMJWHs2_VVFpOoqdJO_c2e3FMRoCfWgQAvD_BwE',
        collectionTag:'Tumbled Stones'
    },
    {
        ownerId:4,
        title:'Rough Honey Calcite ',
        tagLine:'Chakras: Root, Solar Plexus, Third Eye',
        discription:'Releases positive energy into home and workplace.  Good for chronically sick animals and those who have been mistreated. Clears negativity, and helps you believe in yourself and assists you in positively influencing others. ',
        price:'3.75',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Honey-21-1.png',
        purchaseLink:'https://mysticelements.shop/collections/crystals-stones-rough/products/honey-calcite-rough',
        collectionTag:'Raw'
    },
    {
        ownerId:2,
        title:'Desert Rose Cluster',
        tagLine:'Chakras: Crown',
        discription:'Place Desert Rose in the center of your home to bring about family unity. Helps one develop an area of expertise at work. Amplifies fire magic, and is helpful in past-life recall. Helpful for connecting to energies of the Devic Realm.',
        price:12.75,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__desert-rose-22-1.png',
        purchaseLink:'https://mysticelements.shop/collections/crystals-stones-clusters/products/desert-rose-cluster',
        collectionTag:'Raw'
    },
    {
        ownerId:4,
        title:'Fluorite Natural Cluster',
        tagLine:'“stone of discernment and aptitude”,',
        discription:'Fluorite brings order to chaos in the physical, emotional and spiritual systems. Helps you to see the reality and truth behind illusion. Aids in unbiased reasoning. it brings energies of responsibility to intuition. Helps you concentrate and stabilizes energy, bringing balance to groups.',
        price:75.00,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__folurite-natural-23-1.png',
        purchaseLink:'https://mysticelements.shop/collections/crystals-stones-clusters/products/fluorite-natural-cluster',
        collectionTag:'Raw'
    },
    {
        ownerId:3,
        title:'Green Phantom Ghost Quartz Crystal Cluster / Healing / Anti infection anti inflammatory',
        tagLine:'Green Phantom Clusters are created by treating quartz with chlorite through a manmade process in order to create a beautiful shade of green, and gorgeous crystal clusters!',
        discription:'While all Phantoms are facilitators for growth, Green Chlorite Phantom Crystals specifically work on self-healing and regeneration, and facilitate detoxification. They help to ground excessive emotions into the Earth, thereby helping the user in achieving a state of balance. Green Chlorite Phantoms are great for helping one recognize the Earth as a living being, and connecting to Her on a soul-level. Many energy workers use Green Chlorite Phantom Crystals when doing global healing, as well as personal and individual healing. Green quartz helps to cleanse the aura and align the chakras, and this characteristic is amplified by the Quartz which houses it.',
        price:55.55,
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image-GreePh-2.png',
        purchaseLink:'https://www.etsy.com/listing/820323221/green-phantom-ghost-quartz-crystal?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_ps-a-home_and_living-spirituality_and_religion-religious_jewelry_and_charms-religious_crystals&utm_custom1=_k_CjwKCAjwi9-HBhACEiwAPzUhHKirLoc-R3EK0IChijbPJsXfcMKi9SR-OP0s00t9LFr36fqWs053ohoCKyQQAvD_BwE_k_&utm_content=go_12567673668_122422076071_507300153059_aud-318222619806:pla-307783309625_c__820323221_147048360&utm_custom2=12567673668&gclid=CjwKCAjwi9-HBhACEiwAPzUhHKirLoc-R3EK0IChijbPJsXfcMKi9SR-OP0s00t9LFr36fqWs053ohoCKyQQAvD_BwE',
        collectionTag:'Raw'
    },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});
    
  }
};
