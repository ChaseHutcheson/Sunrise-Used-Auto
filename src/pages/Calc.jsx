import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { useState } from "react";
export function Calc() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [Pass, setPass] = useState('');

  const test = async () => {

    console.log(name, mail, Pass)

  }
  
  return (
    <>
      <img
        src="img\Wallpapers\Calcs.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        
      <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="light">
              Claculator
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">

            <Input variant="standard"  label="Car Price" size="lg" />
            <Input variant="standard" label="Down Payment"size="lg" />
            <Input variant="standard" label="Length (months)"size="lg" />
            <Input variant="standard" label="Creidt Score"size="lg" />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth color="gray">
              Submit
            </Button>
            
          </CardFooter>
        </Card>

      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default Calc;
