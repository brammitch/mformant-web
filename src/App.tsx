import React from 'react';
import logo from './img/logo.png';
import './App.css';

const App: React.FC = () => {
	console.log(process.env.GCLOUD_PROJECT);
	console.log(process.env.FIREBASE_CONFIG);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<a
					className="App-link"
					href="mailto:brandon@mformant.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contact
				</a>
			</header>
		</div>
	);
};

export default App;
