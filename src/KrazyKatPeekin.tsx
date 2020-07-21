import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main';

const KrazyKatPeekin: React.FC = () => {
    return (
        <>
            <Main title={'Krazy Kat Peekin'}/>
        </>
    );
};

const rootElement = document.getElementById('krazy-kat-peekin');
ReactDOM.render(<KrazyKatPeekin/>, rootElement);

export default KrazyKatPeekin;
