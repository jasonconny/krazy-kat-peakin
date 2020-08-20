import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Main from './components/Main';

const KrazyKatPeekin: React.FC = () => {
    return (
        <main>
            <h2>Krazy Kat Peekin'</h2>
            <h3>Through a lace bandana</h3>
        </main>
    );
};

const rootElement = document.getElementById('krazy-kat-peekin');
ReactDOM.render(<KrazyKatPeekin/>, rootElement);

export default KrazyKatPeekin;
