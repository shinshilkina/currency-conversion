import { useEffect, useState } from "react";
import RatesTable from "../components/RatesTable";
import { getAllRates } from "../lib/api";
import { IRateItem } from "../models/rates";
import styles from "./CurrencyExchangeRate.module.css";

function CurrencyExchangeRate() {
  const [rates, setRates] = useState<IRateItem>({});
  const [error, setError] = useState<String>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllRates("USD")
      .then((response) => {
        setIsLoading(false);
        setRates(response.rates);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  let content;

  if (isLoading) {
    content = <div>Pending...</div>;
  }
  if (!isLoading && error) {
    content = <div>{error}</div>;
  }

  if (!isLoading && rates) {
    content = (
      <div>
        <h1 className={styles.title}>Rates currency by the "USD"</h1>
        <RatesTable rates={rates} />;
      </div>
    );
  }

  return <div>{content}</div>;
}

export default CurrencyExchangeRate;
