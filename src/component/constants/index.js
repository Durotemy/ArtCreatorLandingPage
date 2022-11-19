import image1 from "../../images/creator 10.png"
import image2 from "../../images/creator1 3.png"
import image3 from "../../images/creator2 1.png"
import image4 from "../../images/creator3 1.png"
import image5 from "../../images/creator9 1.png"
import mainCardImage from "../../images/image 4.png"
import mainCardImage2 from "../../images/image 6.png";

import wike from "../../images/wike.jpeg";
import makinde from "../../images/makinde.jpeg";
import utorm from "../../images/utorm.jpeg"




export const navLinks = [
  {
    image:image1,
    id: "For You",
    title: "For You",
  },
  {
    image:image2,
    id: "Explore",
    title: "Explore",
  },
  {
    image:image3,
    id: "Profile",
    title: "Profile",
  },
];

export const card = [
  {
    id:"1",
    image:image1,
    name: "Emma",
    likes: 2,
    sold: 3,
  },
  { 
    id:"2",
    image:image2,
    name: "Hannah",
    likes: 4,
    sold: 5,
  },
  {
    id:"3",
    image:image3,
    name: "Esther",
    likes: 6,
    sold: 7,
  },
  {
    id:"4",
    image:image4,
    name: "Sarah",
    likes: 8,
    sold: 9,
  },
  {
    id:"5",
    image:image5,
    name: "Loveth",
    likes: 1,
    sold: 2,
  }
];

export const MainCard = [
  {
    id:'1',
    image:mainCardImage,
    title: "Artwork title",
    text: " lorem ispum lorem ispum lorem ispum  lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    creator: "Austine Boom",
    sold: 2,
  },
  {
    id:'2',
    image:mainCardImage2,
    title: "Artwork title",
    creator: "Steve Hawking",
   
    text: " lorem ispum lorem ispum lorem ispum  lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum"
  },
  {
    id:'3',
    image:mainCardImage,
    title: "Artwork title",
    creator: "Steve Hawking",
    text: " lorem ispum lorem ispum lorem ispum  lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
  },
  {
    id:'4',
    image:mainCardImage2,
    title: "Artwork title",
    creator: "Austine Boom",
    text: " lorem ispum lorem ispum lorem ispum  lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    sold: 2,
  },
]

export const CarouselDetails = [
  {
    id:'1',
    title:`Discover, appreciate and collect the best  `,
    writer:'The Illustra team',
    image: wike
  },
  {
    id:'2',
    title:`Get the best available deals here, appreciate`,
    writer:'The Illustra team',
    image:makinde
  },
  {
    id:'3',
    title:' Discover, Recover and Take over',
    writer:'The Illustra team',
    image: utorm
  }
]
