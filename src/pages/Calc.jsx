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
import { data } from "autoprefixer";
export function Calc() {

  var monthly = 1
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

    this.state = {test: 1}
    
    clicked1 = 1
    var intrest = 0
    if (credit > 661)
       intrest = .0403
    else if (credit > 601)
      intrest = .0657
    else if (credit > 501)
      intrest = .0975
    else if (credit > 300)
      intrest = .1284
    console.log(clicked1)
      
    monthly = (Price * intrest) / (1 - (1 + intrest)**(-Length))
     monTax = monthly * .0575
     montot = monTax + monthly - down
    const yearly = monthly * 12
    const yearTax = yearly * .0575
    const yearlytot = yearly + yearTax - down



  }

  

  



  




  

  return (
    <>
    
      <img
        src="https://raw.githubusercontent.com/ChaseHutcheson/Sunrise-Used-Auto/main/src/img/Wallpapers/ferran-fusalba-rosello-WgUHuGSWPVM-unsplash.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        
      <Card className="absolute pb-2 top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-full" id = "inputs">
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
            <Button variant="gradient" fullWidth color="g reen" onClick={sub}>
            Calculate
            </Button>
            
          </CardFooter>
        </Card>
        
          <Card className=" ml-[260px] pb-56 absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/3" id = "inputs">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" >
              Cost
            </Typography>
          </CardHeader>
          
            <CardBody className="flex flex-col gap-4">
        
          
          
          
          
          
          

          </CardBody>
          <CardFooter className="pt-0">
            
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