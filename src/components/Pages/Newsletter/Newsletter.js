import React, { useState } from "react";
import "../../../Css/Newsletter.css";
function Newsletter() {
  const [value, setValue] = useState("");
  const [btnText, setBtnText] = useState("zapisz się");
  const [email, setEmail] = useState(null);

  const changeValue = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    if (!value.includes("@")) {
      setEmail(false);
    } else {
      setEmail(true);

      setValue("");
    }
    setBtnText("wysyłanie...");

    setTimeout(() => {
      setBtnText("zapisz się");
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!value.includes("@")) {
        setEmail(false);
      } else {
        setEmail(true);
        setValue("");
      }
      setBtnText("wysyłanie...");

      setTimeout(() => {
        setBtnText("zapisz się");
      }, 2000);
    }
  };

  return (
    <div className="newsletterContener">
      <div className="headerNewsletter">
        <p>Bądź na bieżąco</p>
        <h2>Newsletter</h2>
      </div>

      <div className="newsletter">
        <p>
          {email !== null &&
            (!email ? (
              <span>Niepoprawny email !</span>
            ) : (
              <span style={{ color: "#3634e3" }}>
                Dziękujemy za dołączenie !
              </span>
            ))}
        </p>
        <div className="flex">
          <input
            className="inputNewsletterFocus inputNewsletter "
            type="text"
            value={value}
            onChange={changeValue}
            onKeyDown={handleKeyDown}
            placeholder="Email"
          />
          <button onClick={handleSubmit} className="btnNewsletter">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
