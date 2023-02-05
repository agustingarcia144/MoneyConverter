import React from "react";
import propTypes from "prop-types";

function CurrencyInput(props) {
  return (
    <div className="group">
      <h2 className="input-title" value={props.title}>{props.title}</h2>
      <input
        type="text"
        inputMode="numeric"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  title: propTypes.string,
  amount: propTypes.number.isRequired,
  currency: propTypes.string.isRequired,
  currencies: propTypes.array,
  onAmountChange: propTypes.func,
  onCurrencyChange: propTypes.func,
};

export default CurrencyInput;
