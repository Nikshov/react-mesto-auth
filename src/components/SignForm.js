import Header from "./Header";
import React from "react";

function SignForm({ titleText, buttonText, linkText }) {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

function handleEmailChange(evt) {
  setEmail(evt.target.value);
}

function handlePasswordChange(evt) {
  setPassword(evt.target.value);
}

function handleSubmit(evt) {
  evt.preventDefault();
  
}

  return (
    <form
      name="sign-in"
      className="sign"
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <h1 className="sign__title">{titleText}</h1>
      <input
        type="email"
        id="email-signin"
        name="signInEmail"
        className="sign__input"
        placeholder="mail"
        minLength={5}
        maxLength={200}
        required
        value={email}
        onChange={handleEmailChange}
      />
      <span className="sign__input-error">A</span>
      <input
        onChange={handlePasswordChange}
        value={password}
        type="password"
        id="password-signin"
        name="signInPass"
        className="sign__input"
        placeholder="pass"
        minLength={6}
        maxLength={200}
        required
      />
      <span className="sign__input-error">a</span>
      <button
        type="submit"
        className="sign__button"
        aria-label="кнопка отправки формы"
      >
        {buttonText}
      </button>
      <a className="sign__link" href="">
        {linkText}
      </a>
    </form>
  );
}

export default SignForm;