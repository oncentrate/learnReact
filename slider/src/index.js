import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello() {
	let phrase = "Wordl"
	return (
			<h1> Hello {phrase}! </h1>
		)
}

function SaveFullName(props) {
	return (
		<div>
		<h1> Моё имя {props.name}, фамилия - {props.surname} </h1>
		<a href = {props.link}> Ссылка на мой профиль </a>
		</div>
	)
}

function MeetAll() {
	return (
		<div>
		
		<SaveFullName name="Ivan" surname="Samoylin" link="vk.com" />
		<SaveFullName name="Egor" surname="Samoylin" link="vk.com" />
		<SaveFullName name="IDOT" surname="Samoylin" link="vk.com" />

		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
