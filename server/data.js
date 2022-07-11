const invoices = [
  {
    id: "XA5842",
    firstName: "Oluwatobi",
    lastName: "Darlignton",
    email: "darlignton@gmail.com",
    phone:"09289472889",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "5",
        price: "4",
        total: "20"
      }
    ],
    paymentStatus:"paid",
    createdAt: "2022-07-04T12:01:21.016Z"
  },

  {
    id: "KA1203",
    firstName: "Kingsley",
    lastName: "Iwu",
    email: "iwuk@hotmail.com",
    phone:"08276547382",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
        total: "20"
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4",
        total: "20"
      }
    ],
    paymentStatus:"pending",
    createdAt: "2022-07-04T12:01:21.016Z"
  },

  {
    id: "RT8911",
    firstName: "Sandra",
    lastName: "Magnum",
    email: "sandra@gmail.com",
    phone:"+1 992 9742 2421",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
        total: "20"
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4",
        total: "20"
      }
    ],
    paymentStatus:"paid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
  {
    id: "KP0093",
    firstName: "Melia",
    lastName: "Adarona",
    email: "melia@gmail.com",
    phone:"+1 892 9742 2421",
    items: [
      {
        itemname: "HB Pencil",
        quantity: "2",
        price: "7",
        total: "20"
      },
      {
        itemname: "Crayon",
        quantity: "9",
        price: "4",
        total: "20"
      }
    ],
    paymentStatus:"paid",
    createdAt: "2022-07-06T16:23:00.016Z"
  },
]

module.exports = { invoices }