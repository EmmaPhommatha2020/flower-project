// variable
let flowers = [
  { id: 1, title: "Rose", text: " Rose represent an unmistakable expression of love.", img: "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/0/08/Rose975.gif/revision/latest/scale-to-width-down/400?cb=20180123175535" },
  { id: 2, title: "Daisy", text: " Daisy represents innocence and purity.", img: "https://media.giphy.com/media/8LgMGyYaliTzG/source.gif" },
  { id: 3, title: "Tulip", text: " Tulip represents generally perfect love.", img: "https://thumbs.gfycat.com/ConfusedHoarseJuliabutterfly-size_restricted.gif" },
  { id: 4, title: "Sunflower", text: " Sunflower represents seeking out positivity and strength.", img: "https://78.media.tumblr.com/c1fa63d521bb43f91fe4e916540a5938/tumblr_onslqu7uhQ1w8o6t8o1_500.gif" },
  { id: 5, title: "Lavender", text: " Lavender represents silence and luck.", img: "https://media.giphy.com/media/12Lj9rH5xXC37y/giphy.gif" },
  { id: 6, title: "Jasmine", text: " Jasmine represents Love, delicate beauty and grace.", img: "https://data.whicdn.com/images/120322997/original.gif" },
  { id: 7, title: "Orchid", text: " Orchid represents love, luxury, beauty and strength.", img: "https://lh3.googleusercontent.com/-IAyfDRSZRS8/VuRQi2WPUvI/AAAAAAACH1U/Rlmdy9XngsY/w426-h240/phal.gif" },
  { id: 8, title: "Peony", text: " Peony represents romance and a happy marriage.", img: "http://bestanimations.com/Nature/Flora/spring-cherry-blossom-flowers-animated-gif.gif" }
];
let favFlowers = [];

// module.exports
module.exports = {

  read: (req, res) => {
    res.status(200).send(flowers)
  },

  readfavFlower: (req, res) => {
    res.status(200).send(favFlowers)
  },

  create: (req, res) => {
    const { id } = req.body;
    const flowerId = flowers.findIndex(flower => flower.id === id);
    favFlowers.push(flowers[flowerId])
    res.status(200).send(favFlowers)
  },

  update: (req, res) => {
    const { text } = req.body;
    const { id } = req.params;

    const flower = favFlowers.filter((flower) => flower.id == id)
    const flowerObj = flower[0];
    const index = favFlowers.indexOf(flower[0]);
    if (index !== -1) favFlowers[index] = {
      id,
      title: flowerObj.title,
      text,
      img: flowerObj.img
    }
    res.status(200).send(favFlowers)
  },

  delete: (req, res) => {
    let deleteId = req.params.id;
    flowerId = favFlowers.filter(item => item.id === deleteId);
    favFlowers.splice(flowerId, 1);
    res.status(200).send(favFlowers);
  }
}

