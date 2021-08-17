import React from 'react';
import ColoredUserpic from './Components/ColoredUserpic';

function App() {
    return (
        <div className="App">
            <ColoredUserpic
                src='./avatar.png'
                size={150}
                margin={4}
                backgroundColor='red'
                colors={['green', 'blue']}
                hoverColors={['blue', 'green']}
                colorWidth={6}
            />
        </div>
    );
}

export default App;
