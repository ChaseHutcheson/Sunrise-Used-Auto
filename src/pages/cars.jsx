import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import CarsCard from "@/widgets/cards/car-cards";
import carData from "@/data/car-data";

export function Cars() {
  return (
    <>
      <div className="relative flex h-screen justify-center">
        <div className="absolute top-0 h-3/5 w-full bg-[url('img\\car-lot-but-better.jpg')] bg-scroll bg-center" />
          <div className="absolute top-0 h-3/5 w-full bg-black/50 bg-cover bg-center" />                
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Heres Our Inventory
              </Typography>
          </div>
      </div>
      <section className="-mt-96 bg-blue-100 px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <div className="-mt-48 grid grid-cols-2 gap-5 gap-x-30 md:grid-cols-2 xl:grid-cols-3">
            {carData.map(({ img, color, title, price, description }) => (
              <CarsCard
                img = {img}
                title={title}
                color={color}
                price={price}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cars;