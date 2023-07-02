export type Place = {
  imageURL: string;
  imageAlt: string;
  placeName: string;
  countryName: string;
  mapURL: string;
  text: string;
};

export const placeArray: Place[] = [
  {
    imageURL: "./poveglia.jpg",
    imageAlt: "poveglia",
    placeName: "Poveglia Island",
    countryName: "Italy",
    mapURL:
      "https://www.google.com/maps/place/Poveglia/@45.3819737,12.328871,17z/data:!3m1!4b1!4m6!3m5!1s0x477ea550964f6259:0x6186e01392eeb1e8!8m2!3d45.3818788!4d12.331196!16zL20vMDV0bDc1?hl:en-GB&entry:ttu",

    text: "Poveglia Island is an abandoned island located in the Venetian Lagoon in Italy. It has a haunting history and is known as one of the most haunted places in the world.",
  },
  {
    imageURL: "./bran.jpg",
    imageAlt: "romania",
    placeName: "Bran Castle",
    countryName: "Romania",
    mapURL:
      "https://www.google.com/maps/place/Bran+Castle/@45.5149022,25.364975,17z/data:!3m1!4b1!4m6!3m5!1s0x40b347e5a415de31:0xcf922792d921ab7f!8m2!3d45.5149022!4d25.3671637!16zL20vMDJnbXk3?entry:ttu",

    text: "Bran Castle, commonly known as Dracula's Castle, is a medieval fortress situated in the Transylvania region of Romania. It has a Gothic appearance and is associated with the legend of Count Dracula.",
  },
  {
    imageURL: "./islandofdolls.jpg",
    imageAlt: "mexico",
    placeName: "Island of Dolls",
    countryName: "Mexico",
    mapURL:
      "https://www.google.com/maps/place/Island+of+the+Dead+Dolls/@19.2903808,-99.0968924,18z/data:!3m1!4b1!4m6!3m5!1s0x85ce03d465d90e11:0xd3b68638909d159b!8m2!3d19.2901607!4d-99.0965097!16s%2Fg%2F1yprt_f_n?entry:ttu",

    text: "The Island of the Dolls, located in the Xochimilco canals near Mexico City, is adorned with thousands of creepy dolls hanging from trees and buildings. It is believed to be haunted by the spirit of a girl who drowned nearby.",
  },
  {
    imageURL: "./forest.jpg",
    imageAlt: "japan",
    placeName: "Aokigahara Forest",
    countryName: "Japan",
    mapURL:
      "https://www.google.com/maps/place/Aokigahara+Forest/@35.4752183,138.6379265,17z/data:!3m1!4b1!4m6!3m5!1s0x601be721e912db77:0xed043493c8ad92e1!8m2!3d35.4752183!4d138.6405014!16zL20vMDliNWMz?entry:ttu",

    text: "Aokigahara Forest, also known as the Sea of Trees or Suicide Forest, is a dense forest at the northwest base of Mount Fuji in Japan. It is infamous for its association with suicides and eerie atmosphere.",
  },
  {
    imageURL: "./chillon.jpg",
    imageAlt: "Switzerland",
    placeName: "Château de Chillon",
    countryName: "Switzerland",
    mapURL:
      "https://www.google.com/maps/place/Chillon+Castle/@46.4142131,6.9249175,17z/data:!3m1!4b1!4m6!3m5!1s0x478e9a5baedd65c3:0x22994259155c8307!8m2!3d46.4142131!4d6.9274924!16zL20vMDRkZHB6?entry:ttu",

    text: "Château de Chillon is a medieval castle located on the shores of Lake Geneva in Switzerland. It has a mysterious atmosphere and is known for its underground dungeons and eerie legends.",
  },
];
