import React from 'react';
import ReactDOM from 'react-dom';

// import our main component
import H1BGraph from './components/H1BGraph';

String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function(){
	return this.charAt(0).toLowerCase() + this.slice(1);
}

// give me a react component that does stuff...
ReactDOM.render(<H1BGraph url="data/h1bs.csv" />, document.querySelectorAll('.h1bgraph')[0]);