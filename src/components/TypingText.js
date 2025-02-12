import React, { useEffect, useState } from 'react';

const TypingText = (props) => {
    const {
        text = 'mensaje de prueba',
        speed = 50,
        className,
        styles
    } = props;
    const [textDisplaying, settextDisplaying] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                settextDisplaying(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <p class={className} style={{fontSize: '16px', color: '#000',paddingLeft: 50, ...styles}}>{textDisplaying}</p>
    );
}

export default TypingText;
