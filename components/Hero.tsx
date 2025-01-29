import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Agir Durablement</span>
            <span className="block text-green-200">pour les ODD</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-green-100 sm:max-w-3xl">
            Ensemble, construisons un avenir durable en atteignant les Objectifs de Développement Durable.
            Rejoignez notre mission pour un monde meilleur et plus équitable.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Faire un don
            </Link>
            <Link
              href="/volunteer"
              className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Devenir bénévole
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
