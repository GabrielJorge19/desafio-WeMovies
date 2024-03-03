import React, { SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoAdicionarAoCarrinho } from '../../../assets/logoAdicionarAoCarrinho.svg';

interface FilmesProps {
    filmes: Filme[];
    carrinho: FilmeCarrinho[];
    setCarrinho: React.Dispatch<SetStateAction<FilmeCarrinho[]>>;
}

export function Filmes({ filmes, carrinho, setCarrinho }: FilmesProps): React.JSX.Element {

    const navigate = useNavigate();

    const adicionarFilme = (filme: Filme) => {
        setCarrinho(prev => [...prev, { ...filme, quant: 1 }]);
    }

    return <div style={styles.filmes}>
        {filmes.map((filme) => {

            let price = filme.price.toFixed(2).replaceAll('.', ',');

            let filmeNoCarrinho = carrinho.find(item => item.id === filme.id);
            let quant = (!!filmeNoCarrinho) ? filmeNoCarrinho.quant : 0;


            let textoBotao = (quant > 0) ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO";
            let color = (quant > 0) ? "#039B00" : "#009EDD";

            return <div key={filme.id} style={styles.filme}>
                <img src={filme.image} style={styles.imagem} alt="" />
                <p style={styles.titulo}>{filme.title}</p>
                <p style={styles.preco}>R$ {price}</p>
                <div style={{ ...styles.botao, backgroundColor: color }}
                    onClick={() => {
                        if (quant === 0) adicionarFilme(filme);
                        else navigate("/Carrinho");
                    }}>
                    <LogoAdicionarAoCarrinho />
                    {quant}
                    <span style={styles.textoBotao}>{textoBotao}</span>
                </div>
            </div>
        })}
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100%',
        backgroundColor: '#2F2E41',
        minHeight: '100vh',
        paddingBottom: 30,
    },
    filmes: {
        // width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 15,
        padding: '0px 15px',
        margin: 'auto',
    },
    filme: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        padding: '10px 0px',
        borderRadius: 4,
        flex: '1 1 250px',
    },
    imagem: {
        height: '200px',
        objectFit: 'contain',
    },
    titulo: {
        fontFamily: 'sans-serif',
        fontWeight: '700',
        fontSize: '12px',
    },
    preco: {
        fontFamily: 'sans-serif',
        fontWeight: '700',
        fontSize: '16px',
    },
    botao: {
        width: '86%',
        // backgroundColor: '#009EDD',
        padding: 10,
        border: 'none',
        borderRadius: 4,
        color: 'white',
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    textoBotao: {
        padding: 5,
        fontFamily: 'sans-serif',
        fontWeight: '700',
        fontSize: '12px',
    }

}