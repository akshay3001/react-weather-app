import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
    summer: {
        text: "let's hit beach",
        iconName: 'sun'
    },
    winter: {
        text: "Its chilly here",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`}></i>
        </div>
    );
}

export default SeasonDisplay