import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ContactForm from "@/Components/UseMail";


export function Home() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_pc3mt9o', form.current, 'jzA73c5tFUqINj7QC')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    
  }

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        {/* <div className="absolute top-0 h-full w-full bg-[url('src/img/Wallpapers/Home_Page_Banner.jpg')] bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-[url('https://ichef.bbci.co.uk/news/976/cpsprodpb/11390/production/_114044507_mediaitem114044506.jpg')] bg-cover bg-center" />
        {/* <div className="absolute top-0 h-full w-full bg-[url('../img/Wallpapers/Home_Page_Banner.jpg')] bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Get Your Next Car With Us!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We believe, unlike some car brands, that cars are not just a privilege or a commodity,
                They are a necessity to live your life. And we have dedicated our time and created our
                buisness model to giving you the best quality of cars for the lowest possible price.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className=" -mt-24 bg-blue-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                We Care About Our Customers
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Here at Sunrise Used Automobiles, we not only want to give you the best car at the lowest price,
                but ensure your experience is as best as it can possiblely be.
                <br />
                <br />
                We dedicate our time to making sure that your matters are taken care of quickly and effectively.
              </Typography>
              <Button variant="gradient" className="bg-blue-100">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="src\\img\\Web-Design\\Car selling Image.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Best of Quality
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    We make sure that every car we buy is restored as best as possible before
                    resale to ensure your happy with your new vehicle.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Meet The Crew">
            Here are the people willing to ensure your next car buying experience
            is as best as it can possiblely be.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-5 gap-x-30 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position}) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Come Down Today!">
            We are open from 10am to 8pm, 7 days a week, every week
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to be a part of the team?">
            Fill out this for and will respond in 24 - 48 hours.
          </PageTitle>
          <ContactForm />
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
