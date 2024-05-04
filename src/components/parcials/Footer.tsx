import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    
    
    
<footer className="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <p className="text-sm leading-6 text-gray-600">Todos los proyectos son realizados en typescript y estan en servidores externos gratuitos por ello pueden demorar al cargar.</p>
        <div className="flex space-x-6">
          
          
            <Link to="https://twitter.com/FcoSantoyoRios" className="text-gray-400 hover:text-gray-500">

            <span className="sr-only">Linkedin</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  width="19" viewBox="0 0 26 29">
<path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
</svg>
            </Link>
          <Link to="https://twitter.com/FcoSantoyoRios" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">X</span>
            <svg width="25" viewBox="0 0 48 48">
<linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4b4b4b"></stop><stop offset=".247" stop-color="#3e3e3e"></stop><stop offset=".686" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#252525"></stop></linearGradient><path fill="currentColor" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
</svg>
          </Link>
          <Link to="https://github.com/JavierSantoyo89" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
              <path  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
              </li>
              
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
              </li>
             
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
            
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-xs justify-center text-center leading-5 text-gray-500">&copy; 2024 todos los derechos reservados a sus respectivos dueños.</p>
    </div>
  </div>
</footer>
    
  )
}
