import { Header } from '../../components/header/index'
import { ListaVazia } from './partes/listaVazia';
import { FilmesNoCarrinho } from './partes/filmesNoCarrinho'
import React, { useContext } from 'react';
import { ContextCarrinho } from '../../services/contexts';

export function Carrinho(){

    const {carrinho, setCarrinho} = useContext(ContextCarrinho);

    return <div style={styles.container}>
        <Header />
        <div style={styles.content}>
            {(carrinho!.length === 0)?<ListaVazia />:<FilmesNoCarrinho carrinho={carrinho!} setCarrinho={setCarrinho!} />}
        </div>

    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#2F2E41',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        padding: 15,
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        margin: '0 auto',
    }
}


