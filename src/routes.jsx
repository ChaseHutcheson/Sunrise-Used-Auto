import { Home, Calc } from "@/pages";
import { Cars } from "@/pages/Cars/Cars"
import {
  UserCircleIcon,
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
    icon: UserPlusIcon,
    name: "Loan Calculator",
    path: "/loan-calc",
    element: <Calc />,
  }
];

export default routes;
