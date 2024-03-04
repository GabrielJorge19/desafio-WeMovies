import React, { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ListaDeFilmes } from './listaDeFilmes';
import { TabelaDeFilmes } from './tabelaDeFilmes';
import { useState, useEffect } from "react";
import './style.css';

interface ContextCarrinhoType {
    carrinho: FilmeCarrinho[],
    setCarrinho: React.Dispatch<SetStateAction<FilmeCarrinho[]>>;
}

export function FilmesNoCarrinho({ carrinho, setCarrinho }: ContextCarrinhoType): React.JSX.Element {

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(true);

    let valorTotal = carrinho.reduce((acumulado, filme) => acumulado + filme.quant * filme.price, 0).toFixed(2);

    const setQuantidade = (id: number, valor: number): void => {
        setCarrinho(prev => {
            let arr = prev.slice();
            let obj = arr.find(el => el.id === id);
            if (!!obj) obj.quant = valor;
            return arr;
        })
    }

    const removerFilme = (id: number): void => {
        setCarrinho(prev =>
            prev.filter(filme => filme.id !== id)
        )
    }

    useEffect(() => {
        const resize = () => setIsMobile(window.innerWidth < 767)
        resize()

        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, [])

    return <div style={styles.container} className='carrinhoContainer'>
        <div style={styles.filmes}>
            {(isMobile) ?
                <ListaDeFilmes carrinho={carrinho} setQuantidade={setQuantidade} removerFilme={removerFilme} />
                : <TabelaDeFilmes carrinho={carrinho} setQuantidade={setQuantidade} removerFilme={removerFilme} />
            }
        </div>

        <div style={styles.finalizarPedido} className='finalizarPedido'>
            <div style={styles.divisor} className='divisor' />
            <div style={styles.totalContainer} className='totalContainer'>
                <span style={styles.topLine} />
                <span style={{ ...styles.topLine, ...styles.totalLabel }}>TOTAL</span>
                <p style={{ ...styles.topLine, ...styles.totalValue }}>R$ {valorTotal}</p>
            </div>
            <button style={styles.finalizarPedidoBotao} className='finalizarPedidoBotao' onClick={() => { setCarrinho([]); navigate('/CompraRealizada') }} >FINALIZAR PEDIDO</button>
        </div>
    </div>;
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'space-between',
        flexGrow: 1,
        width: '100%',
        flex: 1,
    },
    filmes: {
        display: 'flex',
        width: '100%',
    },
    divisor: {
        height: 1,
        backgroundColor: '#999999',
        width: '100%',
    },
    finalizarPedido: {
        fontFamily: 'sans-serif',
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'column',
    },
    totalContainer: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    topLine: {
        width: '33%',
        textAlign: 'center',
        padding: '10px 0px',
    },
    totalLabel: {
        fontSize: 14,
        color: '#999999',
        margin: 'auto',
        flexShrink: 1,
    },
    totalValue: {
        fontSize: 20,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        flexGrow: 1,
    },
    finalizarPedidoBotao: {
        display: 'flex',
        boxSizing: 'border-box',
        flex: '1 0 40%',
        backgroundColor: '#009EDD',
        color: 'white',
        borderRadius: 4,
        border: 'none',
        padding: '12px 0px',
        fontWeight: '700',
        textDecoration: 'none',
        justifyContent: 'center',
        fontSize: 14,
        cursor: 'pointer',
    }
}