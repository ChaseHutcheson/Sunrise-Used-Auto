import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CarsCard({ id, productName, price, color, productImage, specs }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
      <CardHeader className="h-49">
        <img src={productImage} alt="Car-Photo" className="h-fit w-auto shadow-lg shadow-gray-500/25" />
      </CardHeader>
      <CardBody className="px-6 text-center">
        <Typography variant="h5" className="mb-2 text-left" color="blue-gray">
            <div className="text-center">{productName} </div> 
            <div>------------------------------------------------------</div>
        </Typography>
        <Typography>
          <div className="text-left font-bold">Color: {color}</div>
        </Typography>
        <Typography className="text-left font-bold">
          {specs}
        </Typography>
        <Typography className="font-bold text-green-400 text-left">
          ${price}
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

CarsCard.displayName = "/src/widgets/layout/cars-caard.jsx";

export default CarsCard;
