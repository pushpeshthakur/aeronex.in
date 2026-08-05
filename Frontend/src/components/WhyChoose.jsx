import React from 'react'
import SectionHead from './SectionHead'
import { whyChoose } from '../data/Content'
import Reveal from './Reveal'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const WhyChoose = () => {
  return (
    <section className="py-2 md:py-5 bg-blue-100">
        <div className="max-w-7xl mx-auto gap-12 bg-linear-br from-white/20 to-white/50">
            <SectionHead 
                eyebrow="Why Aeronex"
                title="Built On Engineering Discipline"
                desc="Four commitments that shape every unit we manufacture."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 m-14" >
                {whyChoose.map((f , i) => (
                    <Reveal key={f.title} delay={i*0.09}>
                        <motion.div 
                        whileHover={{y:-6}} 
                        className="bg-white rounded-2xl border p-8 hover:shadow-[0_24px_40px_-22px_rgba(15,23,42,0.22)] transition-shadow duration-300 ">

                            <div className="flex items-center justify-center l-14 w-14 rounded-2xl mb-4 bg-emerald-200">
                                <f.icon className="w-6 h-6 stroke-teal-400 m-4"/>
                            </div>
                            <h4 className="text=[16px] text-grey-800">{f.title}</h4>
                            <p className="text-[13px] text-base leading-relaxed">{f.desc}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChoose