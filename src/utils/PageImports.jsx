import Home from "../pages/Home";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Attractions from "../pages/Attractions";

export { Home, Flights, Hotels, Attractions };

export const navLinks = [
  { label: "Stays", to: "/hotels" },
  { label: "Flights", to: "/flights" },
  { label: "Attractions", to: "/attractions" },
];
