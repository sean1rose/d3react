import React, { Component } from 'react';
// import d3 from 'd3';
import { csv } from 'd3-request';
import { format } from 'd3-time';

export default class HIBGraph extends Component {
	constructor() {
		// constructor is called every time the class is instantiated into an object

		// use super to call the parent's constructor, which is React's Component constructor
		super();

		// dictionary that holds component's current state
		this.state = {
			rawData: []
		};
	}

	// right before rendering...
	componentWillMount() {
		this.loadRawData();
	}

	// will put d3's data-loading magic here...
	loadRawData() {
		// instead of having data in relative directory, could send post request here

		let dateFormat = format("%m/%d/%Y");

		csv(this.props.url)
			.row((d) => {
				if (!d['base salary']){
					return null
				}
				
				// cleans up keys parses dates into Date() obj and parses number-strings into numbers
				return {
					employer: d.employer,
					submit_date: dateFormat.parse(d['submit date']),
					start_date: dateFormat.parse(d['start date']),
					case_status: d['case status'],
					job_title: d['job title'],
					clean_job_title: this.cleanJobs(d['job title']),
					base_salary: Number(d['base salary']),
					salary_to: d['salary to'] ? Number(d['salary to']) : null,
					city: d.city,
					state: d.state
				};
			})
			.get((error, rows) => {
				if (error){
					console.error('error - ', error);
					console.error('error stack - ', error.stack);
				} else {
					this.setState({rawData: rows});
					console.log('this - ', this.state.rawData);
				}
			});
	}

	render() {
		return (
				<div>
					<svg>
					</svg>
				</div>
		);
	}
}