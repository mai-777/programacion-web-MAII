import { useEffect } from "react";
import { useState } from "react";

export default function CambioMoneda() {
  const [data, setData] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/e07b069c0acbbdfef5b4f159/latest/USD"
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData && responseData.conversion_rates) {
          setData(responseData.conversion_rates);
        } else {
          console.error("No se encontraron tasas de cambio en la respuesta.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
    setSelectedValue(data[currency]);
  };

  return (
    <div className="tarjeta">
      <h2>Selecciona una moneda:</h2>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="">-- Selecciona --</option>
        {Object.keys(data).map((moneda, index) => (
          <option key={index} value={moneda}>
            {moneda}
          </option>
        ))}
      </select>
      {selectedCurrency && (
        <div>
          <p>Moneda seleccionada: {selectedCurrency}</p>
          <p>Valor: {selectedValue}</p>
        </div>
      )}
    </div>
  );
}
