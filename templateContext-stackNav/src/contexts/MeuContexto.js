// ./src/contexts/MeuContexto.js
import React, { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  const [estadoGlobal, setEstadoGlobal] = useState(0);
  const [nome, setNome] = useState(0)

  return (
    <MeuContexto.Provider value={{ estadoGlobal, setEstadoGlobal, nome, setNome }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}
