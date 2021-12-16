import React from "react";
import { IRateItem } from "../models/rates";
import styles from "./RatesTable.module.css";

function RatesTable(props: { rates: IRateItem }) {
  console.log(props.rates);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Currency</td>
          <td>Rate</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.rates).map((rateName) => (
          <tr key={rateName}>
            <td className={styles.currency}>{rateName}</td>
            <td>{props.rates[rateName].toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RatesTable;
