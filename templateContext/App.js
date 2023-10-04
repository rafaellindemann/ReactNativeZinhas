import React from 'react';
import { MeuContextoProvider } from './src/contexts/MeuContexto.js';
import Consumidor from './src/components/Consumidor';

export default function App() {
  return (
    <MeuContextoProvider>
      <Consumidor />
    </MeuContextoProvider>
  );
}
