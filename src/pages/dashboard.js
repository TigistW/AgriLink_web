import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Container from "../components/container";
import boxImg from "../assets/boxImage.png";

function Dashboard() {
  const document = [
    {
      image: boxImg,
      title: "THE YAM PROJECT",
      price: "Price per unit: #5000",
      duration: "Duration: 5 months",
      roi: "ROI: 5%",
      location: "Location: Abeokuta",
      start: "Start date: 2nd Feb, 2005",
      end: "End date: 2nd jun, 2003",
      links: "View full details",
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
            <Link className="bg-light-green">Dashboard</Link>
            <Link>Investment</Link>
            <Link to="/farm">Farm Projects</Link>
            <Link>Profile</Link>
          </div>
        </div>
        <div className="md:py-0 md:px-10 md:w-4/5 bg-light-blue">
          <h2 className="font-bold text-green text-[30px]">Dashboard</h2>
          <div className="flex justify-start md:mt-2">
            <div className="w-full flex-col md:px-5">
              <h1 className="font-semibold text-[20px] md:text-[25px]">
                Welcome user,
              </h1>
              <div className="justify-between flex md:flex-row flex-col md:gap-10 gap-5 md:mt-5 md:p-0 px-3 py-4">
                <div className=" bg-white md:w-[250px] h-[100px] md:h-[160px] flex flex-col justify-between border-2 border-dark-grey md:rounded-[20px] rounded-[10px] md:p-3">
                  <p className="font-bold text-light-green text-[20px]">
                    Total number of investment
                  </p>
                  <h1 className="flex justify-end font-bold text-green text-[30px]">
                    2
                  </h1>
                </div>
                <div className="bg-white md:w-[250px] h-[100px] md:h-[160px] flex flex-col justify-between border-2 border-dark-grey md:rounded-[20px] rounded-[10px] md:p-3">
                  <p className="font-bold text-light-green text-[20px]">
                    Total amount invested
                  </p>
                  <h1 className="flex justify-end font-bold text-green text-[30px]">
                    5000
                  </h1>
                </div>
                <div className="bg-white md:w-[250px] h-[100px] md:h-[160px] flex flex-col justify-between border-2 border-dark-grey md:rounded-[20px] rounded-[10px] md:p-3">
                  <p className="font-bold text-light-green text-[20px]">
                    Upcoming payments
                  </p>
                  <h1 className="flex justify-end font-bold text-green text-[30px]">
                    1/2/2034
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-cols items-start md:mt-[20px]">
            <h1 className="md:mb-3 font-bold text-[30px]">Farm Projects</h1>
            <div className="md:flex md:justify-start md:px-0 px-1">
              <div className="w-full md:flex justify-between">
                <div className="mb-10 md:mb-0">
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
      </div>
    </div>
  );
}

export default Dashboard;
