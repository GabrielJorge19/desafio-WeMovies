import React from 'react';
import { Header } from '../../components/header/index'
import { BackButton } from '../../components/backButton'
import { ReactComponent as CompraRealizadaSvg } from '../../assets/compraRealizada.svg';

export function CompraRealizada(): React.JSX.Element {
    return <div style={styles.container}>
        <Header />
        <div style={styles.padding}>
            <div style={styles.content}>
                <p style={styles.titulo}>Compra realizada com sucesso!</p>
                <CompraRealizadaSvg />
                <BackButton />
            </div>
        </div>
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: '#2F2E41',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    padding: {
        padding: 15,
    },
    content: {
        maxWidth: '900px',
        backgroundColor: 'white',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        padding: '55px 0px',
        margin: 'auto',
    },
    titulo: {
        width: '55%',
        fontFamily: 'sans-serif',
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 20,
    }

}