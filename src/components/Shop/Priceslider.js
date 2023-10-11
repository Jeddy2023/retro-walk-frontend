import React, { useState, useEffect } from 'react'
import ReactSlider from 'react-slider';

function Priceslider({ selectedPriceRange, setSelectedPriceRange }) {

    const [value, setValue] = useState(selectedPriceRange);

    useEffect(() => {
        setValue(selectedPriceRange);
    }, [selectedPriceRange]);

    const handlePriceChange = (newValue) => {
        setValue(newValue);
        setSelectedPriceRange(newValue);
    };

    return (
        <div>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={value}
                max={90}
                min={10}
                onChange={(newValue) => {
                    handlePriceChange(newValue);
                }}
            />
            <h4>Price: ₦{value[0]}.00 - ₦{value[1]}.00</h4>
        </div>
    )
}

export default Priceslider