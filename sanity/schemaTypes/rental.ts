export default {
  name: "rental",
  title: "Rental",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "pickupLocation",
      title: "Pickup Location",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "pickupDate",
      title: "Pickup Date",
      type: "date",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "returnLocation",
      title: "Return Location",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "returnDate",
      title: "Return Date",
      type: "date",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "cardNumber",
      title: "Card Number",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "expirationDate",
      title: "Expiration Date",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "cardHolder",
      title: "Card Holder",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "cvc",
      title: "CVC",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "carName",
      title: "Car Name",
      type: "string",
    },
    {
      name: "carType",
      title: "Car Type",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "imageUrl",
      title: "Image URL",
      type: "url",
      options: {
        hotspot: true,
      },
    },
  ],
}

