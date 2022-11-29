import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CarsCard({ img, color, price, title, description }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500">
      <CardBody className="px-6 text-center">
        <Typography>
          <img src={img} alt="Car-Photo" className="h-full w-full shadow-lg rounded-2xl shadow-gray-500/25"/>
          <div className="text-gray-50">.</div>
        </Typography>
        <Typography variant="h5" className="mb-2 text-left" color="blue-gray">
          {price} {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600 text-left">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

CarsCard.defaultProps = {
  color: "blue",
};

CarsCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  price: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

CarsCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default CarsCard;
