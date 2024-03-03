import React from "react";
import { useContext } from "react";
import { Header } from '../../components/header/index';
import { ContextCarrinho, ContextFilmes } from '../../services/contexts';
import { Filmes } from './partes/filmes';
import { Loading } from './partes/loading';

export function Home() {
    const { carrinho, setCarrinho } = useContext(ContextCarrinho);
    const { filmes } = useContext(ContextFilmes);

    return <div style={styles.container}>
        <Header />
        {(filmes.length > 0) ?
            <Filmes filmes={filmes} carrinho={carrinho!} setCarrinho={setCarrinho!} />
            : <Loading />
        }

    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#2F2E41',
        minHeight: '100vh',
        paddingBottom: 30,
    }
}