import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles';
import Main from './components/Main';

const KrazyKatPeekin: React.FC = () => {
    return (
        <GlobalStyles>
            <Main title={'Krazy Kat Peekin\''}/>
        </GlobalStyles>
    );
};

const rootElement = document.getElementById('krazy-kat-peekin');
ReactDOM.render(<KrazyKatPeekin/>, rootElement);

export default KrazyKatPeekin;
