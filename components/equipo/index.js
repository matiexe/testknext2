import React from 'react'
import Link from 'next/Link'
const index = () => {
    return (
        <>
    <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-2xl lg:text-5xl font-custom  text-blue-kai">Nuestro Equipo</h1>
             
            </div>
          </div>
  <div className="flex flex-wrap">
      {/* trujillo */}
    <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Nicolas Trujillo" src="../../public/nicotrujillo.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Nicolas Trujillo</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Fundador y CEO</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/nicolas-trujillo/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-dribbble"></i>
            </button>
            
          </div>
        </div>
      </div>
    </div>
        {/* Ruggero */}
        <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Agustin Ruggero" src="/agustinruggero.jpg" className="grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Agustin Ruggero</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Project Manager</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/agustin-ruggero-ba2745114/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>
        {/* Emanuel */}
    <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Emanuel Marques" src="/marques.jpg" className="grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Emanuel Marquez</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/emanuel-marquez-0718b09b/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>
       {/* Pastrana */}
       <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Martin Pastrana" src="/pastrana.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Martin Pastrana</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Java Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/martindiazpastrana/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>
         {/* Farinola */}
         <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Santiago Farinola" src="/farinola.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Santiago Farinola</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web & Java Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/santiago-farinola-440048188/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>

    {/* Urra */}
             <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Matias Urra" src="/Urra.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Matias Urra</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/murra/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>
        {/* Gonzales Fabricio */}
        <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Gonzales Fabricio" src="/gonzales.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Fabricio Gonzales</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/fabricio-gonzalez-170495/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>


            {/* Estrada Francisco */}
            <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Estrada Francisco" src="/francisco.jpg" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Francisco Estrada</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/francisco-gabriel-estrada-006372219/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>


               {/* Emiliano Aguero */}
               <div className=" xl:w-3/12 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <img alt="Emiliano Aguero" src="/emiliano.png" className=" grayscale hover:grayscale-0 shadow-lg rounded-full mx-auto w-56 h-56"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-custom text-blueGray-700">Emiliano Aguero</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-custom">Web Developer</p>
          <div className="mt-2 justify-between">
          <Link href="https://www.linkedin.com/in/emiliano-agustin-aguero-losardo-74402515a/"  className="w-8 h-8">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
              <i className="fab fa-linkedin"></i>
            </button>
          </Link>
            
            
            
          </div>
        </div>
      </div>
    </div>


  </div>
        </>
    );
}


export default index;
