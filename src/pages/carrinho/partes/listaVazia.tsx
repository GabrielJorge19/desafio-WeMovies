import React from 'react';
import { ReactComponent as CarrinhoVazio } from '../../../assets/carrinhoVazio.svg';
import { BackButton } from '../../../components/backButton'

export function ListaVazia(): React.JSX.Element {

    return <div style={styles.container}>
        <h1 style={styles.titulo}>Parece que não há nada por aqui :(</h1>
        <CarrinhoVazio />
        <BackButton />
    </div>;
}
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        margin: '0 auto',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: '55px 0px',
        gap: 40,
        width: '100%',
    },
    titulo: {
        fontSize: 20,
        width: '60%',
        textAlign: 'center',
        fontWeight: '700',
    },
};
