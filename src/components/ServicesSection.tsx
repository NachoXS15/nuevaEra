import services from '../config/Services'
import type { selectedService } from '../config/definitions'
import { useState } from 'react'
import '../styles/styles.css'
import ButtonC from './ButtonC.astro'
export default function ServicesSection() {

    const [selectedService, setSelectedService] = useState<selectedService>(services[1])

    return (
        <section className="w-full px-5 md:px-0 h-fit pb-20 flex flex-col" id='servicios'>
            <h2 className="text-center my-5 font-bold text-4xl text-white">NUESTROS SERVICIOS</h2>
            <div className="w-full flex flex-wrap justify-center gap-5 md:gap-14 items-center ">
                {
                    services.map((service, i) => (
                        <article key={i} onClick={() => setSelectedService(service)} className="overflow-hidden shadow-custom w-36 h-48 shadow-custom hover:cursor-pointer bg-white flex flex-col items-center py-8 px-6 rounded-2xl border-darkblue hover:scale-110 transition">
                            <img src={service.img} className="mb-2 " alt="" />
                            <h2 className="text-wrap text-center text-md font-semibold">{service.title}</h2>
                        </article>
                    ))
                }
            </div>
            <article className="w-full md:w-3/4 mt-20 shadow-custom m-auto h-fit md:h-96 flex flex-col md:flex-row gap-5 bg-white rounded-2xl shadow-custom">
                <div className="h-60 md:h-96 w-full md:w-2/6 flex items-center justify-center rounded-2xl bg-white">
                    <img src={selectedService.display}  alt="" />
                </div>
                <div className="w-full max-h-full md:w-4/6 my-10 py-10 flex flex-col justify-between md:py-0 px-5 md:pr-5">
                    <div>
                        <h2 className="font-bold uppercase text-4xl">{selectedService.title}</h2>
                        {selectedService.desc.map((desc, i) => (
                            <p key={i} className="font-regular mb-4 text-xl mt-3">{desc}</p>
                        ))}
                    </div>
                    <a href="#servicios" id='staff' className='w-fit text-white text-xl uppercase font-bold rounded-full px-5 py-2 bg-darkblue'>Más servicios</a>
                </div>
            </article>
        </section>
        
    )
}


