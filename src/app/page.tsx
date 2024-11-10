import Link from "next/link"
import Nevbar from "./component/Nevbar";
import Footer from "./component/Footer";

export default function Home() {
  return (

    <div>
      <Nevbar />
<br />
      <ul className=" flex space-x-10 px-4 w-full justify-center">
        <li className="bg-orange-600 w-1/3 h-44">1</li>
        <li className="bg-orange-600 w-1/3 h-44">2</li> 
        <li className="bg-orange-600 w-1/3 h-44">3</li>

      </ul>
      <br />
      <ul className=" flex space-x-10 px-4 w-full justify-between">
      <li className="bg-red-800 w-1/2 h-64">4</li>
      <li className="bg-red-800 w-1/2 h-64">4</li>

      </ul>
      <br />
      <Footer />
    </div>
  );
}