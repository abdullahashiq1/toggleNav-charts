import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";


const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))

    })

    return (
        <div className="mx-12">
            <h4 className="text-5xl text-center text-purple-900 bg-purple-400 font-bold p-4">Affordable Price</h4>
            <div className=" grid md:grid-cols-3 gap-3 ">
                {
                    prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;