import { Home, Cars, SignIn, SignUp, Calc } from "@/pages";
import {
  HomeIcon,
  TruckIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

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

export default routes;