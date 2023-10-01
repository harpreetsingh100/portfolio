import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/ff000152-fc2a-4fcd-a85b-ac7539cdd05a"
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2  bg-[#ccd6f6] rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6] rounded-lg"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2 rounded-lg"
          placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
