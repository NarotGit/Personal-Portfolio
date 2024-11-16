import React from 'react';
import Typewriter from 'typewriter-effect';

const Interests = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'Data Science',
                    'AI/ML Engineering',
                    'Data Engineering',
                    'Data Analytics'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Interests;
