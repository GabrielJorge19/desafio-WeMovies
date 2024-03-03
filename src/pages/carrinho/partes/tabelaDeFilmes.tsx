import React from 'react';
import { ReactComponent as Lixeira } from '../../../assets/lixeira.svg';
import { ReactComponent as Mais } from '../../../assets/mais.svg';
import { ReactComponent as Menos } from '../../../assets/menos.svg';


export function TabelaDeFilmes({ carrinho, setQuantidade, removerFilme }: DisplayFilmesPropsInterface): React.JSX.Element {

    return <div style={styles.container}>
        <div style={styles.linha}>
            <p style={{ ...styles.coluna1, ...styles.cabecalho }}>PRODUTO</p>
            <p style={{ ...styles.coluna2, ...styles.cabecalho }}>QTD</p>
            <p style={{ ...styles.coluna3, ...styles.cabecalho }}>SUBTOTAL</p>
        </div>

        {carrinho.map(filme => {

            let subTotal = (filme.quant * filme.price).toFixed(2);

            return <div style={styles.linha} key={filme.id}>
                <div style={styles.coluna1}>
                    <img src={filme.image} style={styles.imagem} alt="" />
                    <div style={styles.coluna1Div}>
                        <p>{filme.title}</p>
                        <p>R$ {filme.price}</p>
                    </div>
                </div>

                <div style={styles.coluna2}>
                    <Menos style={{ cursor: 'pointer' }} onClick={() => { if (filme.quant > 1) setQuantidade(filme.id, --filme.quant) }} />
                    <input type='number' style={styles.inputQuant} value={filme.quant} readOnly={true} />
                    <Mais style={{ cursor: 'pointer' }} onClick={() => setQuantidade(filme.id, ++filme.quant)} />

                </div>

                <div style={styles.coluna3}>
                    <p>R$ {subTotal}</p>
                    <Lixeira style={{ cursor: 'pointer' }} onClick={() => removerFilme(filme.id)} />
                </div>
            </div>
        })}
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: 'sans-serif',
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',

    },
    cabecalho: {
        textAlign: 'start',
        color: '#999999',
        paddingTop: '15px',
        fontSize: 14,
    },
    linha: {
        display: 'flex',
        alignItems: 'center',
    },
    coluna1: {
        display: 'flex',
        width: '50%',
        backgroundColor: '',
    },
    imagem: {
        objectFit: 'contain',
        maxHeight: '100%',
        width: 80,
    },
    coluna1Div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 40,
        gap: 10,
    },
    coluna2: {
        display: 'flex',
        alignItems: 'center',
        width: '20%',
        gap: 5,
    },
    inputQuant: {
        width: 60,
        height: 25,
        border: '1px solid #D9D9D9',
        borderRadius: 4,
        textAlign: 'center',
    },
    coluna3: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
    },


}