import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

function calcFatorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [pari, setPari] = useState("Indefinido")

  useEffect(() => {
    setFatorial(calcFatorial(number));
    setPari(number % 2 == 0 ? "Par" : "impar")
}, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{number}</span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>

          <span className="text red">{pari}</span>
        </div>
    
    </div>
  );
};

export default UseEffect;
