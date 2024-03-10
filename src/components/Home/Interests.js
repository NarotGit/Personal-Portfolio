import React from 'react';
import Typewriter from 'typewriter-effect';

const Interests = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'Data Science',
                    'ML/AI Engineering',
                    'Data Analytics',
                    'Data Engineering'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Interests;
