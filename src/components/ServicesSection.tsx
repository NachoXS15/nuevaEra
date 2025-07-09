import services from '../config/Services'
import type { selectedService } from '../config/definitions'
import { useState } from 'react'
import '../styles/styles.css'
export default function ServicesSection() {

    const [selectedService, setSelectedService] = useState<selectedService>(services[1])

    return (
        <section className="w-full h-fit pb-20 flex flex-col">
            <h2 className="text-center my-5 font-bold text-4xl text-white">NUESTROS SERVICIOS</h2>
            <div className="w-full flex flex-wrap justify-center gap-5 md:gap-14 items-center">
                {
                    services.map((service, i) => (
                        <article key={i} onClick={() => setSelectedService(service)} className="shadow-custom w-36 shadow-custom h-48 hover:cursor-pointer bg-white flex flex-col items-center py-8 px-6 rounded-2xl border-darkblue hover:scale-110 transition">
                            <img src={service.img} className="mb-2" alt="" />
                            <h2 className="text-wrap text-center text-md font-semibold">{service.title}</h2>
                        </article>
                    ))
                }
            </div>
            <article className="w-3/4 mt-20 shadow-custom m-auto h-96 flex gap-5 bg-white rounded-2xl shadow-custom">
                <div className="h-96 w-2/6 rounded-2xl bg-slate-600"></div>
                <div className="w-4/6 mt-10 pr-5">
                    <h2 className="font-bold uppercase text-4xl">{selectedService.title}</h2>
                    {selectedService.desc.map(desc => (
                        <p className="font-regular mb-4 text-xl">{desc}</p>
                    ))}
                </div>
            </article>
        </section>
        
    )
}


