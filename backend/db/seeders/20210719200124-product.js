'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Products', [
        {
        ownerId:1 ,
        title:'Opalite Moon Crystal Healing Stone Crescent Moon Shape',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image1.png',
        discription:'Sizes and shapes differ slightly, sizes range from 30 - 35 mm. Surface is bumpy on both sides and moon is puffy so its\'s thicker in the center and thinner towards the edges.',
        price:0.22,
        purchaseLink:'https://www.etsy.com/listing/792634952/opalite-moon-crystal-healing-stone?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=crystals&ref=sr_gallery-1-13&organic_search_click=1&pro=1'
    },
    {
        ownerId:1,
        title:'OPAL Cabochon - Oval, Orange with Flash',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image2.png',
        discription:'Gems and crystals are great for altars, grids, terrariums, pocket stones, gifts, home decorating, collecting and more!',
        price:19.95,
        purchaseLink:'https://www.etsy.com/listing/1045617291/opal-cabochon-oval-orange-with-flash?ref=listing_page_ad_row-4&plkey=cdf6c30d6fc1e71e86d66662ec2f259d41c978dd%3A1045617291&pro=1&frs=1'
    },
    {
        ownerId:1,
        title:'Beginners Crystal Kit, 10 pcs In Velvet Pouch',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image3.png',
        discription:'Selected for their beauty, energy and popularity, each stone represents key areas of the crystal world.',
        price:35.95,
        purchaseLink:'https://www.etsy.com/listing/739846633/beginners-crystal-kit-10-pcs-in-velvet?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=crystals&ref=sr_gallery-1-2&organic_search_click=1&frs=1&bes=1'
    },
    {
        ownerId:2,
        title:'Blue Celestite Cluster',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image4.png',
        discription:'Celestite is a sweet blue crystal, with a lovely gentle uplifting vibration.',
        price:14.99,
        purchaseLink:'https://www.etsy.com/listing/829633599/celestite-blue-celestite-cluster-healing?ref=internal_similar_listing_bot-6&pro=1&frs=1'
    },
    {
        ownerId:2,
        title:'Raw Aragonite Star Cluster',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image5.png', 
        discription:'Aragonite aids concentration and brings tolerance and flexibility to the mind.',
        price:12.99,
        purchaseLink:'https://www.etsy.com/listing/850644002/aragonite-cluster-aragonite-cluster-raw?ref=related-3&pro=1&frs=1',
    },
    {
        ownerId:3,
        title:'Angel Phantom Quartz',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image5.png',
        discription:'The metaphysical properties of Angel Phantom Quartz (also known as Amphibole) are quite alive; it is a powerful stone which aligns you with the Angelic forces of the Universe.',
        price:193.50,
        purchaseLink:'https://crystalgemstoneshop.com/collections/angel-phantom-quartz/products/angel-phantom-quartz-amphibole-unique-specimens'
    },
    {
        ownerId:3,
        title:'Bisthum Gemstone collect',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image7.png',
        discription:'Bismuth creates a solid and cohesive environment for understanding more advanced principles of magick. It is a gemstone that provides focus, clarity and connection with your spiritual self; allowing for revelations and power.',
        price:4.50,
        purchaseLink:'https://crystalgemstoneshop.com/collections/bismuth/products/bismuth-gemstone-large-the-stone-of-clarity-focus'
    },
    {
        ownerId:3,
        title:'Blue Lace Agate',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image7.png',
        discription:'Blue Lace Agate is a beautiful stone that has incredible countenance in the gemstone world.  Its lacy appearance ebbs and flows with lilac-blue to sky-blue tones and is a stone praised for its ability to unearth your inner voice.',
        price:18.00,
        purchaseLink:'https://crystalgemstoneshop.com/collections/blue-lace-agate/products/blue-lace-agate-natural-gemstone-slice-slab-by-the-bag'

    },
    {
        ownerId:4,
        title:'Tangerine aura quartz',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image8.png',
        discription:'Tangerine aura quartz is your gateway to spiritual discovery and exploration. It is a stone you can meditate, wear and work with that brings out your natural connection and bond with the Spiritual Realm.',
        price:15.00,
        purchaseLink:'https://crystalgemstoneshop.com/collections/tangerine-aura-quartz/products/tangerine-aura-quartz-gemstone-pendant'
    },
    {
        ownerId:4,
        title:'Tumbled Yellow Obsidian',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image9.png',
        discription:'Yellow Obsidian is a powerful stone that burns away negative energy and promotes a well-balanced atmosphere.',
        price:2.95,
        purchaseLink:'https://crystalgemstoneshop.com/collections/yellow-obsidian/products/yellowobsidian'
    },
    {
        ownerId:4,
        title:'Polychrome Jasper Free Form',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image10.png',
        discription:'Its green, gold, and scarlet hues transport you to the deserts of its Madagascar origin and infuse the soul with fire and passion.',
        price:56.00,
        purchaseLink:'https://selenestone.com/collections/new-crystals/products/polychrome-jasper-free-form?variant=39409480106055'
    },
    {
        ownerId:4,
        title:'Small Smoky Quartz Polished Point',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image11.png',
        discription:'Smoky Quartz is kinda like a metaphysical houseplant; using its shadowy aesthetic to absorb and purify energies while returning the clear, positive vibes back to the earth.',
        price:18.00,
        purchaseLink:'https://selenestone.com/collections/new-crystals/products/small-smoky-quartz-polished-point'
    },
    {
        ownerId:4,
        title:'Amethyst Druzes', 
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image13.png',
        discription:' Amethyst attracts strength and boosts mental clarity while deflecting demons of fear, stress, and depression. In fact, it has been known to absorb negative energies from the body and reflect it as a deeper color within its peaks.',
        price:273,
        purchaseLink:'https://selenestone.com/collections/clusters/products/amethyst-druzes?variant=32691631226951'
    },
    {
        ownerId:1,
        title:'Tourmaline Quartz',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image14.png',
        discription:'Place this powerful stone near your doors or entry points to your sacred spaces to act as a barrier for bad energy and keep it from entering your safe spaces.',
        price:8.99,
        purchaseLink:'https://zengems.co/collections/crystal-points/products/tourmaline-crystal-point'

    },
    {
        ownerId:2, 
        title:'Positivity & Serenity Pillar Gift Bundle Set',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image15.png',
        discription:'This Positivity crystal set is the perfect gift for crystal collectors and enthusiasts, vibrational healers, reiki therapists, and other energy workers.',
        price:44.99,
        purchaseLink:'https://zengems.co/collections/bundles/products/healing-pillar-gift-bundle'


    },
    {
        ownerId:2,
        title:'Agate Plate',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image16.png',
        discription:'Agate plates are perfect for placing a candle, herbs and stones on for use as a jewelry ring tray. Also can be used as a charging plate for setting your crystals in the moonlight.',
        price:7.25,
        purchaseLink:'https://tamedwild.com/collections/crystals-stones/products/agate-plates'
    },
    {
        ownerId:3,
        title:'Florite Worry Stone',
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image17.png',
        discription:'Multiple colors shine through in the rainbow fluorite worry stone. Fully polished with a concave indentation on one side. Measures 1.81" X 1.23" X .46".',
        price:22.00,
        purchaseLink:'https://www.exquisitecrystals.com/fluorite-worry-stone-209-jak-06'
    }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});
    
  }
};
