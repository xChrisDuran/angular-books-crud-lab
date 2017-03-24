var db = require("./models");


//seeded data
var animalList = [];
    // this will push my animal list into my index.html
    animalList.push({
      animalName: 'Giant Panda',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ursidae',
      genus: 'Ailuropoda',
      species: 'A. melanoleuca',
      scientificName: 'Ailuropoda melanoleuca',
      conservationStatus: 'Vulnerable',
      homeRegion: 'China',
      diet: 'Bamboo'
    });
      animalList.push({
      animalName: 'Bald Eagle',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Accipitriformes',
      family: 'Accipitridae',
      genus: 'Haliaeetus',
      species: 'H.leucocephalus',
      scientificName: 'Haliaeetus leucocephalus',
      conservationStatus: 'Least Concern'
      homeRegion: 'North America',
      diet: 'Fish'
    });
    animalList.push({
      animalName: 'Giraffe'
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Giraffidae',
      genus: 'Giraffa',
      species: 'G. giraffa',
      scientificName: 'Giraffa giraffa',
      conservationStatus: 'Vulnerable',
      homeRegion: 'Southern Africa',
      diet: 'Leaves, flowers, fruits and shoots of woody plants.',
    });
    animalList.push({
      animalName: 'King Cobra',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      subOrder: 'Serpentes',
      family: 'Elapidae',
      genus: 'Ophiophagus',
      species: 'O. hannah',
      scientificName: 'Ophiophagus hannah',
      conservationStatus: 'Vulnerable',
      homeRegion: 'Asia',
      diet: 'Other snakes and vertebrates',
    });
    animalList.push({
      animalName: 'Humpback Whale',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      SubOrder: 'Cetacea',
      family: '	Balaenopteridae',
      genus: 'Megaptera',
      species: 'M. novaeangliae',
      scientificName: 'Megaptera novaeangliae'
      conservationStatus: 'Least Concern'
      homeRegion: 'Oceans of the World',
      diet: 'Krill and small fish',
    });
    animalList.push({
      animalName: 'Flower hat jelly',
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Limnomedusae',
      family: 'Olindiidae',
      genus: 'Olindias',
      species: 'O. formosus',
      scientificName: 'Olindias formosus'
      conservationStatus: 'Least Concern'
      homeRegion: 'Coastal waters in Southern Japan, Brazil and Argentina',
      diet: 'small fishes',
    });

    // populate each animal ????
    });
