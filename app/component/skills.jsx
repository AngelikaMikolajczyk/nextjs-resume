'use client';
import React, { useState } from 'react';

export default function Skills({ data }) {
    const [activeTab, setActiveTab] = useState('soft');

    function handleOnTabButtonClick(newActiveTab) {
        setActiveTab(newActiveTab);
    }

    function setBg(active) {
        return active === activeTab ? 'bg-yellow' : 'bg-grey';
    }

    function setTabAlignment(tab) {
        return tab === 'soft' ? 'text-left' : 'text-right';
    }

    return (
        <div>
            <div className="flex">
                {['soft', 'hard'].map((el) => (
                    <button
                        key={el}
                        type="button"
                        className={`btn ${setBg(el)} ${setTabAlignment(el)}`}
                        onClick={() => handleOnTabButtonClick(el)}
                    >
                        {el} skills
                    </button>
                ))}
            </div>
            <ul
                className={`flex flex-row flex-wrap content-start py-4 gap-2 ${
                    activeTab === 'soft' ? 'justify-start' : 'justify-end'
                }`}
            >
                {data[activeTab].map(({ icon, text }) => (
                    <li key={text} className="skill">
                        <span>{icon}</span>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
