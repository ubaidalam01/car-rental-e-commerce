import { createClient, SanityClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: '8d0iihqx', 
  dataset: 'production',    
  useCdn: true,             
  apiVersion: '2023-01-01',
  token:'skFJDvUML53uULdt1vk6ahzuApFgIXczzgLSFPW9AWcBaLh3eOtxUO3VKFEbriLXY52Rkq7wMdkEGuewkbnmQyFKuJLYdsjhLyd6VGUdNcz5liuGzeb5sr9kwLGi7Q7MvYZipuL0BkfV44eoZrbkKFUMVChSA2xEWQGSSyz5SK0Ddc9e14W5'
});

export async function createRentalEntry(data: {
  name: string
  phone: string
  address: string
  city: string
  pickupLocation: string
  pickupDate: string
  returnLocation: string
  returnDate: string
  cardNumber: string
  expirationDate: string
  cardHolder: string
  cvc: string
  carName: string
  carType: string
  price: string
  imageUrl: string
}) {
  try {
    const result = await sanityClient.create({
      _type: "rental",
      name: data.name,
      phone: data.phone,
      address: data.address,
      city: data.city,
      pickupLocation: data.pickupLocation,
      pickupDate: data.pickupDate,
      returnLocation: data.returnLocation,
      returnDate: data.returnDate,
      cardNumber: data.cardNumber,
      expirationDate: data.expirationDate,
      cardHolder: data.cardHolder,
      cvc: data.cvc,
      carName: data.carName,
      carType: data.carType,
      price: data.price,
      imageUrl: data.imageUrl,
    })
    return result
  } catch (error) {
    console.error("Error creating rental entry:", error)
    throw error
  }
}

