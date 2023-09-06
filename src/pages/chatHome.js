import React, { useState } from "react";
import { Link } from 'react-router-dom';
const ChatHome = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [content, setcontent] = useState(true)
  const classname  = content ? "" : "hidden";

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //   these are the styles for the chat boxes for both the user and incoming message from the API
  const userStyle = "flex justify-end md:mr-[40px] md:mt-[60px]";
  const botStyle = "flex justify-start md:ml-[40px] md:mt-[40px] md:w-[700px]";
  const innerUserStyle = "justify-end md:mr-[100px]";
  const innerbotStyle = "justify-start md:ml-[100px]";

  const handleSend = async () => {
    setcontent(false);
    if (inputValue.trim() === "") return;
    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = { text: data.message, sender: "bot" };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
   const handleKeyPress = (e) => {
     if (e.key === "Enter") {
       handleSend();
     }
   };

  return (
    <div className="chatbot-interface">
      <nav className="flex items-center justify-between mx-auto w-5/6">
        <div className="md:text-[35px] font-bold">
          <span className="text-green">Agri</span>Bot
        </div>
        <div className="">
          <Link
            to="/dashboard"
            className="text-white p-3 bg-green rounded-[10px]"
          >
            Dashboard
          </Link>
        </div>
      </nav>
      <div className="">
        <div className="text-center font-bold text-[65px] md:mt-[10px]">
          <p>
            <span className="text-green">Agri</span>bot
          </p>
        </div>
        <div className={`${classname}`}>
          <div className="w-4/6 mx-auto chat-container md:flex justify-between md:mt-[80px]">
            <div className="shadow-xl chatbox p-[60px] rounded-[60px]">
              fast response
            </div>
            <div className="shadow-xl chatbox p-[60px] rounded-[60px]">
              applicable
            </div>
            <div className="shadow-xl chatbox p-[60px] rounded-[60px]">
              to the point
            </div>
          </div>
        </div>
        <div className="chat-container md:max-h-[400px] overflow-auto overflow-x-hidden">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`w-full message ${
                message.sender === "user" ? userStyle : botStyle
              }`}
            >
              <div
                className={`flex ${
                  message.sender === "user" ? innerUserStyle : innerbotStyle
                } md:w-[600px]`}
              >
                <div
                  className={`w-fit border-2 border-dark-grey px-10 rounded-[20px] p-3 ${
                    message.sender === "user" ? "" : "bg-green text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="input-area fixed bottom-10 w-full">
          <div className="grid grid-cols-6 w-5/6 mx-auto">
            <button className="bg-green hover:bg-light-green text-white text-center col-span-1 rounded-full">
              New Chat
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="rounded-full border-2 p-3 col-span-4"
            />
            <button
              onClick={handleSend}
              className="bg-light-green col-span-1 rounded-full text-white hover:bg-green"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHome;

