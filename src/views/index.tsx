import { StaticImageData } from "next/image";
import image from "../../public/image.png";
// import p1 from "../../public/p1.web";
import p1 from "../../public/p1.webp"
import p2 from "../../public/p2.webp";
import p3 from "../../public/p2.webp";
import p4 from "../../public/p4.webp";
import p5 from "../../public/p5.webp";
import p6 from "../../public/p6.webp";


interface ContactsTypes {
  id: number;
  fname: string;
  lname?:string;
  age:string;
  phone: number;
  address: string;
  img: StaticImageData;
}

const defaultlname ='daadad'

export const MockContacts: ContactsTypes[] = [
  {
    id: 1,
    fname: "John ",
    lname:'Doe',
    age:'28 year young',
    phone: 1234567890,
   
    img: image,

    address: "123 Main St, Cityville, USA",
  },
  {
    id: 2,
    fname: "Danish",
    lname: "Ali",
    age:'28 year young',
    phone: 1234567890,
    img: p4,

    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 3,
    fname: "Ali",
    age:'28 year young',
    phone: 92323232323,

    img: p6,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 4,
    fname: "Hamza",
    age:'28 year young',
    phone: 1234567890,
    img: image,
 
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 5,
    fname: "Manahil",
    phone: 1234567890,
     age:'28 year young',
    img: p2,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 6,
    fname: "Eman",
    phone: 1234567890,
     age:'28 year young',
    img: p6,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 7,
    fname: "Sumbul",
    phone: 1234567890,
     age:'28 year young',
    img: p5,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 8,
    fname: "Kiran",
    phone: 1234567890,
     age:'28 year young',
    img: p1,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 9,
    fname: "Ayesha",
    phone: 1234567890,
     age:'28 year young',
    img: p4,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 10,
    fname: "sana",
    phone: 1234567890,
     age:'28 year young',
    img: p1,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 11,
    fname: "Ayima Khan",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 12,
    fname: "Maryam",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 13,
    fname: "Iqra",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 14,
    fname: "Rizwan",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 15,
    fname: "Alina ALi",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 16,
    fname: "Muniba",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 17,
    fname: "Hussain",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 18,
    fname: "Tayyab",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 19,
    fname: "Ahtisam",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 20,
    fname: "Razzaq",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 21,
    fname: "Sufyan",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 22,
    fname: "Faizan",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 23,
    fname: "Muzamil",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 24,
    fname: "Mehwish",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 25,
    fname: "Eman ALi",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 26,
    fname: "Muneeb",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 27,
    fname: "Jahazhab",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 28,
    fname: "Office",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 29,
    fname: "IG Punjab",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 30,
    fname: "Imran Khan",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },
  {
    id: 31,
    fname: "Ashraf",
    phone: 1234567890,
     age:'28 year young',
    img: image,
    address: "456 Elm St, Townsville, USA",
  },

  // Add more contacts...
  {
    id: 32,
    fname: "Michael Johnson",
    age:'28 year young',
    phone: 5555555555,
    img: image,
    address: "789 Oak Rd, Villageland, USA",
  },

  // Add more contacts...
];

// console.log(mockContacts);
