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

  const [Price, setPrice] = useState('');
  const [Length, setLength] = useState('');
  const [credit, setCredit] = useState('');
  
  const cred = event => {setCredit(event.target.value); };
  const prices = event => {setPrice(event.target.value); };
  const lengths = event => {setLength(event.target.value); };

  const sub = async () => {
    



    const everything = {credit, Price, Length}
    console.log(everything)
    const responce = await fetch('http://127.0.0.1:5000/result', {
        method: 'POST',
        headers: {
            "credit": credit,
            'price': Price,
            'length': Length,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(everything)
    })
  }

  

  

  return (
    <>
      <img
        src="img\Wallpapers\ferran-fusalba-rosello-WgUHuGSWPVM-unsplash.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        
      <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4" id = "inputs">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" >
              Calculator
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">

            <Input variant="standard"  label="Car Price" size="lg" onChange={prices} />
            <Input variant="standard" label="Down Payment"size="lg" />
            <Input variant="standard" label="Length (months)"size="lg"onChange={lengths} />
            <Input variant="standard" label="Credit Score"size="lg"onChange={cred} />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth color="green" onClick={sub}>
            Calculate
            </Button>
            
          </CardFooter>
        </Card>
        

        

      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  )
}

export default Calc;

// npm run dev