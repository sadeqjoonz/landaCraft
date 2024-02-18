import Navbar from "./Navbar"
import Home from "../../Components/home/Home";
import Charity from "../../Components/charity/Charity";
import Arrival from "../../Components/arrival/Arrival";



export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <Charity/>
      <Arrival/>
    </>
  );
}
