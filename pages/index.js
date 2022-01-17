import React from "react";
import Header from "../components/Header"
import Hero from "../components/hero/index"
import Testimonials from "../components/testimonials/index"
import Alianzas from "../components/alianzas/index"
import Equipo from "../components/equipo/index"
import Contacto from "../components/contacto/index"
import Footer from "../components/footer"
export default function index() {
    return (
        <>
            <div className="w-full ">
                <Header />
                <Hero />
                <Alianzas />
                <Equipo />
                <div className=" py-20">
                    <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-28 bg-classicBlue  -mt-1   "></div>
                    <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-44 bg-classicBlue  -mt-28 rotate-3   "></div>
                    <Contacto />
                </div>
                <Footer />
            </div>
        </>
    );
}
