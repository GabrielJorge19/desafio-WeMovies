import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrinho } from "./pages/carrinho/index";
import { CompraRealizada } from "./pages/compraRealizada/index";
import { Home } from "./pages/home/index";
import { ContextCarrinho, ContextFilmes } from './services/contexts';
 


function App(): React.JSX.Element {

    const [carrinho, setCarrinho] = useState<FilmeCarrinho[]>([]);
    const [filmes, setFilmes] = useState<Filme[]>([]);

    return (
        <ContextCarrinho.Provider value={{ carrinho, setCarrinho }}>
            <ContextFilmes.Provider value={{ filmes, setFilmes }}>
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
