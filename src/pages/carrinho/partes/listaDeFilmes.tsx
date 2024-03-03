import React from "react";
import { ReactComponent as Lixeira } from '../../../assets/lixeira.svg';
import { ReactComponent as Mais } from '../../../assets/mais.svg';
import { ReactComponent as Menos } from '../../../assets/menos.svg';

export function ListaDeFilmes({ carrinho, setQuantidade, removerFilme }: DisplayFilmesPropsInterface) {

    return <div style={styles.container}>

        {carrinho.map((filme: FilmeCarrinho) => {

            let subTotal = (filme.quant * filme.price).toFixed(2);

            return <div key={filme.id} style={styles.filme} >

                <div style={styles.imagemConteiner}>
                    <img src={filme.image} style={styles.imagem} alt="" />
                </div>

                <div style={styles.dadosDoFilme} >

                    <div style={styles.linha} >
                        <p style={styles.titulo}>{filme.title}</p>
                        <p style={styles.preco}>R$ {filme.price}</p>
                        <Lixeira style={{ cursor: 'pointer' }} onClick={() => removerFilme(filme.id)} />
                    </div>

                    <div style={styles.linha}>

                        <div style={styles.quant}>
                            <Menos style={{ cursor: 'pointer' }} onClick={() => { if (filme.quant > 1) setQuantidade(filme.id, --filme.quant) }} />
                            <input type='number' style={styles.inputQuant} value={filme.quant} readOnly={true} />
                            <Mais style={{ cursor: 'pointer' }} onClick={() => setQuantidade(filme.id, ++filme.quant)} />
                        </div>

                        <div style={styles.total}>
                            <p style={styles.subTotalLabel} >SUBTOTAL</p>
                            <p>R$ {subTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flex: 1,
        width: '100%',
        // height: '100vh',
        // marginBottom: 'auto,
        flexDirection: 'column',
        gap: 20,
    },
    filme: {
        display: 'flex',
        fontFamily: 'sans-serif',
        fontWeight: 700,
        maxHeight: 100,
        boxSizing: 'border-box',
        gap: 20,
    },
    imagemConteiner: {
        display: 'flex',
        width: 100,
        flexGrow: 0,
    },
    imagem: {
        display: 'flex',
        objectFit: 'contain',
        maxHeight: '100%',
        backgroundColor: '#ccc',
        // width: 50,
        flexShrink: 5,
        flexGrow: 0,
    },
    dadosDoFilme: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // width: '100%',
        // height: '100%',
        boxSizing: 'border-box',
        flexGrow: 1,

    },
    linha: {
        display: 'flex',
        // padding: '5px 0px 5px 15px',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
    },
    titulo: {
        fontSize: 14,
    },
    preco: {
        fontSize: 16,
    },
    quant: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    },
    inputQuant: {
        border: '1px solid #D9D9D9',
        borderRadius: 4,
        width: '30%',
        height: '70%',
        textAlign: 'center',
    },
    total: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    subTotalLabel: {
        color: '#999999',
        fontSize: 12,
    },
}