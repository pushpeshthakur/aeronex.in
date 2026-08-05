import React from 'react'
import Reveal from './Reveal'

const SectionHead = ({eyebrow, title, desc, center=false, dark=false}) => {
  return (
    <>
    {/* <div className="max-w-[640] mx:auto text-center">
        <div className="rounded-2xl ">
            <h2 className="text-xl md:text-2xl mt-4 font-bold uppercase text-violet-600 rounded-2xl border-2 border-blue-400 bg-indigo-100 inline-block px-2">{title}</h2>
        </div>
        <p className="text-xl md:text-2xl mt-3 text-mauve-600">{desc}</p>
    </div> */}
    <Reveal className={`max-w-160 m-14 ${center ? "mx-auto text-center" : ""} ${dark ? "bg-linear-to-br from-blue-500 to-fuchsia-500" : ""}`}>
      <div className={`flex items-center gap-2.5 text-[14px] font-bold tracking-[.18em] uppercase ${dark ? "text-sky-300" : "text-indigo-400"} ${center ? "justify-center" : ""}`}>
        {!center && <span className="w-6.5 h-0.5 bg-teal inline-block" />}
        {eyebrow}
      </div>
      <h2 className={`text-[22px] md:text-[28px] mt-3 font-medium ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {desc && (
        <p className={`mt-3 text-[16.5px] leading-relaxed ${dark ? "text-emerald-300" : "text-muted"}`}>{desc}</p>
      )}
    </Reveal>
    </>
  )
}

export default SectionHead