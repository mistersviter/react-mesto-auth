import React from "react";

function EntranceForm(props) {
  return (
    <form className="entrance-form" onSubmit={props.onSubmit} noValidate>
      <p className="entrance-form__title">{props.title}</p>
      <input
        className="entrance-form__input"
        placeholder="Email"
        name="email"
        type="email"
        //value={formValues.email}
        //onChange={handleChangeInput}
      />
      <input
        className="entrance-form__input"
        placeholder="Пароль"
        name="password"
        type="password"
        //onChange={handleChangeInput}
        //value={formValues.password}
      />
      <button className="entrance-form__submit-button">
        {props.buttonText}
      </button>
    </form>
  );
}

export default EntranceForm;
