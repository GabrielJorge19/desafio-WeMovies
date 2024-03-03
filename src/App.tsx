import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "./pages/home/index"
import { Carrinho } from "./pages/carrinho/index"
import { CompraRealizada } from "./pages/compraRealizada/index"
import { ContextCarrinho, ContextFilmes } from './services/contexts';



function App() {

    const [carrinho, setCarrinho] = useState<FilmeCarrinho[]>([]);
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => {          // Pausa adicionada apenas para simular o carregamento.
                    setFilmes(response);
                }, 2500);
            });
    }, []);


    return (
        <ContextCarrinho.Provider value={{ carrinho, setCarrinho }}>
            <ContextFilmes.Provider value={{ filmes }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/Carrinho" Component={Carrinho} />
                        <Route path="/CompraRealizada" Component={CompraRealizada} />
                    </Routes>
                </BrowserRouter>
            </ContextFilmes.Provider>
        </ContextCarrinho.Provider>
    );
}

export default App;
