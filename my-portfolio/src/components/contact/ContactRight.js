import React from "react";
import { useState } from "react";

const ContactRight = () => {
  const [Username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [loading, setLoading] = useState(false); // ✅ NEW

  const emailValidation = () => {
    return String(Email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (Username === "") {
      seterrMsg("UserName is required!");
    } else if (phoneNumber === "") {
      seterrMsg("Phone Number is required!");
    } else if (Email === "") {
      seterrMsg("Please Enter your Email");
    } else if (!emailValidation()) {
      seterrMsg("Please Enter a Valid Email");
    } else if (Subject === "") {
      seterrMsg("Please Enter Subject");
    } else if (Message === "") {
      seterrMsg("Message is Required");
    } else {
      seterrMsg("");
      setsuccessMsg("");
      setLoading(true); // ✅ SHOW SENDING STATE

      try {
        const response = await fetch("http://localhost:5001/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Username,
            phoneNumber,
            Email,
            Subject,
            Message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        // ✅ Only after backend confirms
        setsuccessMsg("✅ Email sent successfully!");
        setTimeout(() => setsuccessMsg(""), 3000);

        setUsername("");
        setEmail("");
        setMessage("");
        setSubject("");
        setphoneNumber("");
      } catch (error) {
        seterrMsg("❌ Failed to send message. Please try again later.");
        setTimeout(() => seterrMsg(""), 3000);
      } finally {
        setLoading(false); // ✅ STOP SENDING STATE
      }
    }
  };

  return (
    <div className="w-full lg:w-[60%] h-auto py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 mt-9 lg:mt-0">
      <form className="w-full flex flex-col gap-6 lg:py-5 py-2">
        {errMsg && (
          <p className="py-3 text-center text-orange-500 animate-bounce">
            {errMsg}
          </p>
        )}

        {successMsg && (
          <p className="py-3 text-center text-green-500 animate-bounce">
            {successMsg}
          </p>
        )}

        {/* ✅ SHOW "SENDING..." MESSAGE */}
        {loading && (
          <p className="py-3 text-center text-yellow-400 animate-pulse">
            Sending your message, please wait...
          </p>
        )}

        <div className="w-full flex flex-col lg:flex-row gap-10">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            className="contactInput"
            type="text"
            placeholder="Your Name"
          />

          <input
            onChange={(e) => setphoneNumber(e.target.value)}
            value={phoneNumber}
            className="contactInput"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          className="contactInput"
          type="email"
          placeholder="Email"
        />

        <input
          onChange={(e) => setSubject(e.target.value)}
          value={Subject}
          className="contactInput"
          type="text"
          placeholder="Subject"
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={Message}
          cols="30"
          rows="8"
          className="contactTextarea"
          placeholder="Your Message"
        ></textarea>

        <div className="w-full">
          <button
            onClick={handleSend}
            className="contactButton"
            disabled={loading} // ✅ PREVENT DOUBLE CLICK
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
