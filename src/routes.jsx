import { Home, Cars, SignIn, SignUp, Calc } from "@/pages";
import {
  UserCircleIcon,
  HomeIcon,
  TruckIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import AuthDetails from "./pages/Firebase/AuthDetails";


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
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: UserPlusIcon,
    name: "Loan Calculator",
    path: "/loan-calc",
    element: <Calc />,
  }
];

if (AuthDetails) {

  routes.push({
    icon: UserCircleIcon,
    name: "Account",
    path: "/account",
    element: "to Do"
  })
}

export default routes;
