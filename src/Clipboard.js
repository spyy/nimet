import React, { useState } from 'react';


const Clipboard = props => {
    const [title, setTitle] = useState('Kopioi leikepöydälle');
    const [color, setColor] = useState('#0d6efd');

    const onPress = () => {

        console.log('navigator.clipboard');
        var textArea = document.createElement("textarea");
        textArea.value = props.name;
        textArea.style.position = "fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log(msg);
        } catch (err) {
            console.log('Was not possible to copy te text: ');
        }

        document.body.removeChild(textArea);

        setTitle('Kopioitu!');
        setColor('#00EBFE');
    }

    return (
        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" title={title} data-bs-original-title="Kopioi leikepöydälle" onClick={onPress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color} class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
        </a>

    );
}


export default Clipboard;