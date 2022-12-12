import { Home, Cars, SignIn, SignUp, Calc } from "@/pages";
import {
  UserCircleIcon,
  HomeIcon,
  TruckIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { getAuth, onAuthStateChanged } from "firebase/auth"


export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: TruckIcon,
    name: "cars",
    path: "/cars",
    element: <Cars />,
  },
  {
    icon: UserPlusIcon,
    name: "Loan Calculator",
    path: "/loan-calc",
    element: <Calc />,
  }
];

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user){
    routes.push({
    icon: UserCircleIcon,
    name: "Account",
    path: "/account",
    element: "to Do"
    })
    
  }
})

export default routes;
