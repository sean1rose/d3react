import React, { Component } from 'react';
import d3 from 'd3';

// create class w/ render method (contains empty grouping element)
	// grouping element uses the TRANSFORM attribute to MOVE INTO POSITION via the translate property
		// translate() specifies a new x, y position for a given element
class Histogram extends Component {
	constructor(props) {
		super();

		this.histogram = d3.layout.histogram();
		this.widthScale = d3.scale.linear();
		this.yScale = d3.scale.linear();
		this.update_d3(props);
	}

	componentWillReceiveProps(newProps) {
		this.update_d3(newProps);
	}

	update_d3(props){

	}
	
	render() {
		//<Histogram topMargin={100} />
		let translate = `translate(0, ${this.props.topMargin})`;

		return (
			<g className="histogram" transform={translate}></g>
		)
	}
}