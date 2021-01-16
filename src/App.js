import logo from './logo.svg';
import './App.css';
import Header from './app/header'
import Home from './app/home'
import AboutMe from './app/about-me'
import Projects from './app/projects'
import Blogs from './app/blogs'
import Contact from './app/contact'
import Footer from './app/footer'

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<AboutMe />
			<Projects />
			<Blogs />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
