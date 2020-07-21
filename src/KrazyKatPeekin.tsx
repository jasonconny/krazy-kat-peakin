import * as React from 'react';
import * as ReactDOM from 'react-dom';


const KrazyKatPeekin: React.FC = () => {
    return (
        <main>
            <h2>Krazy Kat Peekin'</h2>
        </main>
    );
};

const rootElement = document.getElementById('krazy-kat-peekin');
ReactDOM.render(<KrazyKatPeekin/>, rootElement);

export default KrazyKatPeekin;
