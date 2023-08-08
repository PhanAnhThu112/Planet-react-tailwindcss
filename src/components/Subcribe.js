import React, { useState } from "react";

const Subscribe = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUp = () => {
    setError(""); // Xóa thông báo lỗi nếu có

    if (!email) {
      setError("Please enter your email.");
    } else if (!isChecked) {
      setError("Please agree to receive email communications.");
    }
  };

  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="transition-transform transform hover:scale-110 hover:opacity-70"
          onClick={handleSignUp}
        >
          <a href="#SingUp">Sign Up</a>
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-center justify-center py-2">
        <input
          className="mr-2 hover:cursor-pointer"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p className={isChecked ? "text-blue-500" : ""}>
          Yes, I agree to receive email communications from DeFi.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
