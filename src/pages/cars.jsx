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
import { Footer } from "@/widgets/layout";
import { carData } from "@/data";
import CarsCard from "@/widgets/cards/car-cards";
import { Search } from "@/Components/InventorySearch/searchfilter";

export function Cars() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-3/5 w-full bg-[url('https://raw.githubusercontent.com/ChaseHutcheson/Sunrise-Used-Auto/main/src/img/Wallpapers/Car_Inv_Banner.jpg')] bg-cover bg-center" />
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

                <div class="container text-black">
                <form className="bg-white p-2 rounded-2xl">
                    <input className="w-96" type="text" name="" id="search-item" placeholder="Search products" onkeyup="search()"/>
                    <script src={Search} />
                </form>
              </div>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-96 bg-blue-50 px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <div className="-mt-40 mb-14 grid grid-cols-2 gap-x-5 gap-y-10 gap-x-30 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {carData.map(({productName, price, color, productImage, specs}) => (
            <CarsCard
            productName = {productName}
            price = {price}
            color = {color}
            productImage = {productImage}
            specs = {specs}
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

export default Cars

//https://fancy-raindrop-5dd2a7.netlify.app