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
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
export function Calc() {
  var yearTax = 0
  var yearly = 0
  var yearlytot = 0
  var monthly = 0
  var montot = 0
  var monTax = 0
  const [Price, setPrice] = useState('');
  const [Length, setLength] = useState('');
  const [credit, setCredit] = useState('');
  const [down, setDown] = useState('');
  
  const cred = event => {setCredit(event.target.value); };
  const prices = event => {setPrice(event.target.value); };
  const lengths = event => {setLength(event.target.value); };
  const downs = event => {setDown(event.target.value); };
  var clicked1 = 0
  console.log(clicked1)
  const sub = async () => {
    console.log("I'm Clicking clicking clicking.")
 
    
    clicked1 = 1
    var interest = 0
    if (credit > 661)
       interest = .0403
    else if (credit > 601)
      interest = .0657
    else if (credit > 501)
      interest = .0975
    else if (credit > 300)
      interest = .1284

      
    monthly = (Price * interest) / (1 - (1 + interest)**(-Length))
    monTax = monthly * .0575
    montot = monTax + monthly
     yearly = monthly * 12
     yearTax = yearly * .0575
     yearlytot = yearly + yearTax

    if (isNaN(montot)){
      montot = 0
    }

  if (isNaN(monTax)){
    monTax = 0
  }

  if (isNaN(yearlytot)){
    yearlytot = 0
  }

  if (isNaN(yearTax)){
    yearTax = 0
  }

}

  

  return (
    <>
    
      <img
        src="https://raw.githubusercontent.com/ChaseHutcheson/Sunrise-Used-Auto/main/src/img/Wallpapers/ferran-fusalba-rosello-WgUHuGSWPVM-unsplash.jpg"
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
          <CardFooter className="pt-0" >
            <Button className="mb-5 "variant="gradient" fullWidth color="green" onClick={sub()}>
            Calculate
            </Button>
              
              <div className="flex flex-col items-center">
                <Typography className="mb-3 font-medium">
                  Results:
                </Typography>
                <p className=" font-thin mb-1">Monthly total: {montot.toFixed(2)}</p>
                <p className=" font-thin mb-1">Monthly Taxes: {monTax.toFixed(2)}</p>
                <p className=" font-thin mb-1">Yearly Total: {yearlytot.toFixed(2)}</p>
                <p className=" font-thin mb-1">Yearly Taxes: {yearTax.toFixed(2)}</p>
              </div>
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