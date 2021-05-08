import React, { useState, useEffect } from "react";

import "./App.css";
// import web3 from "./web3";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState('');

  async function ContractData() {
    const managerId = await lottery.methods.manager().call();
    setManager(managerId)
  }

  useEffect(() => {
    ContractData();
  }, []);
  return (
    <div className="App">
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
    </div>
  );
}

export default App;
