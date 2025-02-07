import CarDetailsPage from "@/components/CarDetails";

interface Iparams {

id: string;

}

export default async function ProductDetailsPage ({ params }: { params: Promise<Iparams> }) {

const { id } = await params;

return (

<CarDetailsPage productId={id} />

);

};