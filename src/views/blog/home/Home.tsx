import { Link } from 'react-router-dom'
import { Header } from '@components/parcials/Header'
import { Footer } from '@/components/parcials/Footer'
const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<h1>Blog</h1>
				<p>Esta jalando esta madre</p>
				<section>
					<p>hola, este es mi blog personal donde hablo de tecnologia, salud y temas sobre personas con discapacidad</p>
				</section>
				<article>
					<h3>titulo del articulo</h3>
					<img
						src='#'
						alt='prueba'
					/>
					<p>Texto corto del articulo</p>
					<Link to='#'>palabras clave</Link>
				</article>
			</main>
			<Footer />
		</>
	)
}

export default Home
