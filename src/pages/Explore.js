import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Container from "../components/container";
import boxImg from "../assets/boxImage.png";

function Explore() {
  const document = [
    {
      image: boxImg,
      title: "THE GINGER PROJECT",
      price: "Price per unit: #5000",
      duration: "Duration: 6 months",
      roi: "ROI: 10%",
      location: "Location: Oyo",
      start: "Start date: 1-2-2023",
      end: "End date: 2-3-2023",
      links: "VIEW DESCRIPTION",
    },
  ];
  return (
    <div className="">
      <nav className="bg-white z-40">
        <div className="w-5/6 mx-auto flex justify-between">
          <div className="md:ml-[40px] md:w-[200px] w-[120px]  md:py-5 p-4">
            <img src={logo} alt="logoimg" />
          </div>
          <button>
            <FaBars size={25} />
          </button>
        </div>
      </nav>
      <div className="md:flex border-2">
        <div className="bg-green text-white md:w-1/5 md:py-5 md:px-3 md:h-[660px] md:rounded-tr-[40px]">
          <div className="md:leading-[70px] md:py-10 text-center flex flex-col md:h-[600px] text-[17px] md:text-[20px]">
            <Link to="/dashboard">Dashboard</Link>
            <Link>Investment</Link>
            <Link className="bg-light-green">Farm Projects</Link>
            <Link>Profile</Link>
          </div>
        </div>
        <div className="md:py-0 py-6 md:px-10 md:w-4/5 bg-light-blue">
          <Link
            to="/farmExtend"
            className="font-bold text-green md:text-[30px] text-[25px] hover:text-dark-grey"
          >
            Explore Farm Projects
          </Link>
          <div className="md:w-5/6 mx-auto gap-6 md:mt-5 grid grid-cols-1 md:grid-cols-2 md:py-0 py-4 px-1">
            <Container
              title={document[0].title}
              image={document[0].image}
              price={document[0].price}
              duration={document[0].duration}
              roi={document[0].roi}
              location={document[0].location}
              start={document[0].start}
              end={document[0].end}
              links={document[0].links}
            />
            <Container
              title={document[0].title}
              image={document[0].image}
              price={document[0].price}
              duration={document[0].duration}
              roi={document[0].roi}
              location={document[0].location}
              start={document[0].start}
              end={document[0].end}
              links={document[0].links}
            />
            <Container
              title={document[0].title}
              image={document[0].image}
              price={document[0].price}
              duration={document[0].duration}
              roi={document[0].roi}
              location={document[0].location}
              start={document[0].start}
              end={document[0].end}
              links={document[0].links}
            />
            <Container
              title={document[0].title}
              image={document[0].image}
              price={document[0].price}
              duration={document[0].duration}
              roi={document[0].roi}
              location={document[0].location}
              start={document[0].start}
              end={document[0].end}
              links={document[0].links}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
