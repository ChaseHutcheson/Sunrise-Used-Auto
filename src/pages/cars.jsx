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
import { Footer, SimpleFooter } from "@/widgets/layout";

export function Cars() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-3/5 w-full bg-[url('img\\Car_Inv_Banner.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-3/5 w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className=" mb-96 font-black"
              >
                Welcome to the Garage!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-96 bg-blue-50 px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <div className=" -mt-36 grid grid-cols-2 gap-5 gap-x-30 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Cars;