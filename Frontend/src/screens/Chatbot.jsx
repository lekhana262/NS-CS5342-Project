import React, { useEffect, useState, useRef } from "react";
import { ask_question, loadConversation } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { IoSend } from "react-icons/io5";
import { AiOutlineUser, AiOutlineRobot } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import chatbotIcon from "../assets/chatbot_1.gif";
import chatbotIcon1 from "../assets/chatbot_3.gif";
import HomePage from "./Homepage";

function Chatbot() {
  const dispatch = useDispatch();
  const [showChat, setShowChat] = useState(false);
  const [inputText, setInputText] = useState("");
  const { conversationList } = useSelector((state) => state.data);
  const [chatData, setChatData] = useState(conversationList);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    dispatch(loadConversation());
  }, []);

  useEffect(() => {
    setChatData(conversationList);
    scrollToBottom();
  }, [conversationList]);

  useEffect(() => {
    document.body.style.overflow = showChat ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showChat]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage = {
      question: inputText,
      answer: "Loading...",
    };

    const payload = {
      question: inputText,
    };

    dispatch(
      ask_question(payload, () => {
        dispatch(loadConversation());
      })
    );

    setChatData([...chatData, newMessage]);
    setInputText("");
    scrollToBottom();
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div className="relative">
      {/* Homepage */}
      <HomePage />

      {/* Chatbot Button */}
      {!showChat && (
        <div
          onClick={toggleChat}
          className="fixed bottom-8 right-8 w-24 h-24 cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ zIndex: 1000 }}
        >
          <img src={chatbotIcon} alt="Chatbot" className="w-full h-full rounded-full" />
        </div>
      )}

      {/* Chat Overlay */}
      {showChat && (
        <>
          {/* Semi-transparent overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={closeChat}
          ></div>

          {/* Chatbot Modal */}
          <div
            className="fixed bottom-0 right-0 m-8 w-[50rem] h-[90%] rounded-lg overflow-hidden shadow-2xl border border-gray-300 z-50"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // makes the chatbot window semi-transparent
              backdropFilter: "blur(10px)", // slight blur for a polished look
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-300 to-indigo-300 text-white rounded-t-lg shadow-md">
              <h2 className="text-lg font-semibold">Chat Assistant</h2>
              <button onClick={closeChat} className="text-2xl hover:text-gray-800">
                <CloseIcon />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 h-[70vh] p-4 overflow-y-auto space-y-4 bg-gray-50 rounded-b-lg shadow-lg"
            >
              {chatData.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div className="flex items-center justify-end pb-2">
                    <div className="bg-blue-200 text-blue-900 rounded-lg p-3 inline-block ml-16 shadow-sm">
                      {message.question}
                    </div>
                    <AiOutlineUser className="ml-2 text-blue-500 text-2xl" />
                  </div>
                  <div className="flex items-center justify-start">
                    <img src={chatbotIcon1} alt="Chatbot" className="w-8 h-8 ml-2 rounded-full" />
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3 inline-block mr-16 shadow-sm">
                      {message.answer}
                    </div>
                  </div>
                </div>
              )).reverse()}
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center p-4 bg-white border-t border-gray-300 rounded-b-lg shadow-md"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ask a question..."
              />
              <button
                type="submit"
                className="ml-3 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-lg"
              >
                <IoSend size={20} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbot;
