
import imgs from "../config/AboutUsImg"
import ButtonC from "./ButtonC.astro"
import { useState, useEffect } from "react"

export default function Nosotros() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [imgs.length]);


    return (
        <section className="w-3/4 m-auto flex text-white my-32 flex-col justify-center items-center gap-8 xl:flex-row ">
            <div className="bg-cover bg-center rounded-lg w-full px xl:w-1/2 relative overflow-hidden h-[320px]">
                <div
                    className="w-full h-full flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {imgs.map((img, i) => (
                        <div
                            key={i}
                            className="w-full h-full flex-shrink-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full xl:w-3/4 text-xl flex flex-col items-start justify-start gap-4">
                <h2 className="text-3xl font-bold">¿QUIÉNES SOMOS?</h2>
                <div>
                    <p className="w-">Nueva Era nace con un propósito claro: Ser el aliado estratégico de instituciones, empresas, organismos públicos y privados en su camino hacia la transformación tecnológica.</p>
                    <p className="w-">Nos posicionamos como una empresa tecnológica con visión de startup, que aporta soluciones creativas y escalables a sectores como el industrial, el turístico, el minero y el de servicios.</p>
                </div>
                {/* <ButtonC text="SABER MÁS" size="text-xl" link="/AboutUs" /> */}
            </div>
        </section>
    )
}
