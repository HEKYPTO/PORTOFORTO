import React, { useState, ReactNode } from "react";

interface HidableProps {
    children: ReactNode;
}

const Hidable: React.FC<HidableProps> = ({ children }) => {
    const [isVisible, setVisible] = useState(true);

    const toggleVisible = () => {
        setVisible(!isVisible);
    };

    return (
        <div
            className={`cursor-pointer ${isVisible ? "text-gray-850" : "text-gray-500"} ${isVisible ? "" : "no-print"}`}
            onClick={toggleVisible}
        >
            {children}
        </div>
    );
};

export default Hidable;
