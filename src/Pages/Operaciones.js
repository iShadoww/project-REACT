import React, { useEffect, useState } from "react";

export default function Operaciones() {
    const [number, setNumber] = useState({ one: 0, two: 0 });
    const [suma, setSuma] = useState();
    const [multi, setMulti] = useState();

    useEffect(() => {
        const { one, two } = number
        setSuma(Number(one) + Number(two))
        setMulti(Number(one) * Number(two))
    }, [number])

    const handleInput = (event) => {
        const { name, value } = event.target
        setNumber({ ...number, [name]: value })
    }

    return <>
        <div className="Operaciones">
            <h2>Suma y Multiplicación de dos números</h2>
            <p>Digite los dos numeros:</p><input className="input" onChange={handleInput} name="one" value={number.one} />&
            <input className="input" onChange={handleInput} name="two" value={number.two} />
            <p>Suma =</p><input value={suma} />
            <p>Multiplicación =</p><input value={multi} />
        </div>
    </>
}
