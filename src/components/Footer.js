import React from 'react'

function Footer() {
  return (
    <div id='contactus' className="bg-light-blue md:py-10 md:mt-10 mt-10">
      <div className="py-[20px] md:flex md:justify-between w-5/6 mx-auto">
        <div className="basis-1/2">
          <h2 className="font-bold">Cultify</h2>
          <p className="md:w-[300px] text-dark-grey">
            Need help or have a question? Contact our friendly team. We're here
            to assist you with any inquiries or support you may need. Reach out
            to us today!
          </p>
        </div>
        <div className="mt-[45px] md:flex md:justify-end basis-1/2">
          <div className="leading-[25px] md:leading-10">
            <h2 className="font-bold">Contact Us</h2>
            <p className="text-dark-grey">2349123456789</p>
            <p className="text-dark-grey">cultify@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
