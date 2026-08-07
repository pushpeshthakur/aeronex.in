import React from 'react'
import SectionHead from './SectionHead'
import { products  } from '../data/Content'
import { motion } from "framer-motion";
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

const MotionCard = motion.div

const Products = () => {
  return (
    <section id="products">
        <div className="max-w-[1240] mx-auto">
            <SectionHead
            
            eyebrow="Our Products"
            title="Precision-Engineered Airflow Systems"
            desc="From high-velocity industrial air curtains to complete cleanroom air handling — every Aeronex system is built for reliability at scale."
            />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-14" >
            {products.map((p,i) => {
                const Icon = p.icon;

                return (
                    <Reveal key={p.title} delay={(i % 3) * 0.09}>
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="group relative overflow-hidden border border-line rounded-[20px] p-6  bg-blue-200/40 hover:shadow-[0_30px_50px_-24px_rgba(15,23,42,0.28)] hover:border-[rgba(37,99,235,0.45)] transition-normal duration-300"
                        >
                            {/* <motion.div
                                whileHover={{ rotate: -8, scale: 1.08 }}
                                className="relative z-10 w-15 h-15 rounded-2xl flex items-center justify-center mb-5 text-white bg-indigo-600 shadow-[0_14px_26px_-10px_rgba(37,99,235,0.5)]"
                            >
                                <p.icon className="w-7 h-7" />
                            </motion.div> */}
                            <img src={p.image} alt="product image" className="relative z-10 w-full h-50 rounded-2xl flex items-center justify-center mb-5"/>

                            <h3 className="relative z-10 text-xl font-bold text-navy text-gray-800 mb-2 ">{p.title}</h3>
                            {/* <p className="relative z-10 text-muted text-[14.5px]  mb-5 ">{p.desc}</p> */}
                            <a href="#" className="relative z-10 inline-flex items-center gap-1.5 font-semibold text-sm text-royal">
                                Learn More
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </Reveal>
                );
            })}
        </div>

    </section>
  )
}

export default Products