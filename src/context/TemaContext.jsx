
import React, { createContext, useState } from 'react';

// Criação do contexto para o tema
export const TemaContext = createContext();





export function TemaProvider({ children }) {
    const [tema, setTema] = useState('claro');
  
    const alternarTema = () => {
      setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
    };
  
    return (
      <TemaContext.Provider value={{ tema, alternarTema }}>
        {children}
      </TemaContext.Provider>
    );
  }
  