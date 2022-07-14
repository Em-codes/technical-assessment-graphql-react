const invoices = [
  {
    id: "KA1203",
    firstName: "Kingsley",
    lastName: "Iwu",
    email: "iwuk@hotmail.com",
    phone: "08276547382",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4"
      }
    ],
    paymentStatus: "pending",
    createdAt: "2022-07-04T12:01:21.016Z"
  },
  {
    id: "CH5372",
    firstName: "Rondo",
    lastName: "Panco",
    email: "rondo@hotmail.com",
    phone: "+1 847 654 7382",
    items: [
      {
        itemname: "2B Exercise",
        quantity: "5",
        price: "10"
      },
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-04T12:01:21.016Z"
  },

  {
    id: "RT8911",
    firstName: "Sandra",
    lastName: "Magnum",
    email: "sandra@gmail.com",
    phone: "+1 992 9742 2421",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
  {
    id: "KP0093",
    firstName: "Melia",
    lastName: "Adarona",
    email: "melia@gmail.com",
    phone: "+1 892 9742 2421",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4",
      }
    ],
    paymentStatus: "unpaid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
  {
    id: "DC1458",
    firstName: "Toyosi",
    lastName: "Adibe",
    email: "toyosi@gmail.com",
    phone: "0892 974 2421",
    items: [
      {
        itemname: "Bedtime Story Book",
        quantity: "1",
        price: "20"
      }
    ],
    paymentStatus: "pending",
    createdAt: "2022-06-25T02:23:00.016Z"
  },
  {
    id: "OP4834",
    firstName: "Olie",
    lastName: "Manchester",
    email: "kiew@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Olympic Exercise Book",
        quantity: "7",
        price: "1"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-05-02T17:23:00.016Z"
  },
  {
    id: "TY9703",
    firstName: "Cherry",
    lastName: "Freelancer",
    email: "cherry@hotmail.com",
    phone: "+1 827 654 7382",
    items: [
      {
        itemname: "2B Exercise",
        quantity: "5",
        price: "10"
      },
      {
        itemname: "Colour Palette",
        quantity: "1",
        price: "70"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-04T12:01:21.016Z"
  },
  {
    id: "HG9834",
    firstName: "Lomo",
    lastName: "Westside",
    email: "lomo@gmail.com",
    phone: "39 892 9742 2421",
    items: [
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4",
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
  {
    id: "HF734",
    firstName: "Picslye",
    lastName: "Metrograde",
    email: "metro@gmail.com",
    phone: "39 892 9742 2421",
    items: [
      {
        itemname: "Butter Sweet",
        quantity: "9",
        price: "1",
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
  {
    id: "AR2930",
    firstName: "Bina",
    lastName: "Fanacyica",
    email: "bina@gmail.com",
    phone: "+99 892 9742 2421",
    items: [
      {
        itemname: "Blue Pen",
        quantity: "2",
        price: "7"
      },
      {
        itemname: "Eraser",
        quantity: "3",
        price: "7",
      }
    ],
    paymentStatus: "unpaid",
    createdAt: "2022-06-25T08:23:00.016Z"
  },
  {
    id: "ZA0213",
    firstName: "Adoro",
    lastName: "Uwanile",
    email: "montana@goat.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Walkie Talkie",
        quantity: "2",
        price: "25"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-06-25T09:23:00.016Z"
  },
  {
    id: "FG6573",
    firstName: "Buckley",
    lastName: "Obi",
    email: "obi@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Memoir",
        quantity: "4",
        price: "3"
      },
      {
        itemname: "Ruler",
        quantity: "2",
        price: "1"
      },
    ],
    paymentStatus: "paid",
    createdAt: "2022-06-25T17:23:00.016Z"
  },
  {
    id: "PC4231",
    firstName: "Chu",
    lastName: "Lee",
    email: "lee@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Bull Spears",
        quantity: "4",
        price: "3"
      },
      {
        itemname: "Mickron",
        quantity: "2",
        price: "1"
      },
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-01T17:23:00.016Z"
  },
  {
    id: "MB0834",
    firstName: "Wang",
    lastName: "Yhu",
    email: "yhu@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Bull Spears",
        quantity: "4",
        price: "3"
      },
      {
        itemname: "Mickron",
        quantity: "2",
        price: "1"
      },
    ],
    paymentStatus: "pending",
    createdAt: "2022-07-01T17:23:00.016Z"
  },
  {
    id: "TC9724",
    firstName: "Hello",
    lastName: "Grimpsy",
    email: "hello@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Bull Spears",
        quantity: "4",
        price: "3"
      }
    ],
    paymentStatus: "pending",
    createdAt: "2022-07-01T17:23:00.016Z"
  },
  {
    id: "PR1384",
    firstName: "Callus",
    lastName: "Rhiner",
    email: "callus@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Chalk Board",
        quantity: "1",
        price: "100"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-01T17:23:00.016Z"
  },
  {
    id: "AS675",
    firstName: "Mmadu",
    lastName: "Chimuso",
    email: "madu@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Board Hose",
        quantity: "4",
        price: "25"
      }
    ],
    paymentStatus: "unpaid",
    createdAt: "2022-05-02T17:23:00.016Z"
  },
  {
    id: "KM8977",
    firstName: "Kremlin",
    lastName: "Kiev",
    email: "kiew@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Madush Pouch",
        quantity: "2",
        price: "3"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-05-02T17:23:00.016Z"
  },
  {
    id: "XA5842",
    firstName: "Oluwatobi",
    lastName: "Darlignton",
    email: "darlignton@gmail.com",
    phone: "09289472889",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "5",
        price: "4"
      }
    ],
    paymentStatus: "paid",
    createdAt: "2022-07-04T12:01:21.016Z"
  },
  {
    id: "MD8693",
    firstName: "Mandu",
    lastName: "Juggernaut",
    email: "mjw@gmail.com",
    phone: "0792 8729 421",
    items: [
      {
        itemname: "Cookies Buscuit Carton",
        quantity: "3",
        price: "5"
      }
    ],
    paymentStatus: "pending",
    createdAt: "2022-05-02T17:23:00.016Z"
  },
]

module.exports = { invoices }