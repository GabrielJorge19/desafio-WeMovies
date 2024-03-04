import React from "react";
import { useContext } from "react";
import { ReactComponent as LogoCarrinho } from '../../assets/logoCarrinho.svg';
import './style.css';
import { ContextCarrinho } from '../../services/contexts';
import { useNavigate } from "react-router-dom";

export function Header(): React.JSX.Element {

    const {carrinho} = useContext(ContextCarrinho);
    const navigate = useNavigate();

    return <div style={styles.container}>
        <div style={styles.content}>

            <h1 style={styles.logo} onClick={() => navigate('/')}>WeMovies</h1>
            <div style={styles.dadosCarrinho}>
                <div style={styles.textoCarrinho}>
                    <p style={styles.texto1} className="onlyDesktopContent">Meu carrinho</p>
                    <p style={styles.texto2}>{carrinho!.length} itens</p>
                </div>
                <LogoCarrinho onClick={() => navigate('/Carrinho')} style={{cursor: 'pointer'}}/>
            </div>
        </div>
    </div>
}


let styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100%',
        backgroundColor: '#2F2E41',
        fontFamily: 'sans-serif',

    },
    content: {
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        alignItems: 'center',
        margin: 'auto',
    },
    logo: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        cursor: 'pointer',
    },
    dadosCarrinho: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: 7,
    },
    textoCarrinho: {
        textAlign: 'right',
    },
    texto1: {
        fontSize: 14,
    },
    texto2: {
        color: '#999999',
        fontSize: 12,
    }
}