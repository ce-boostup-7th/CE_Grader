import React from 'react'

import reducer from './reducer'

export const initialState = {
	problems: [
		{
			id: 0,
			title: '',
			difficulty: 1,
			category_id: 1,
			percent:1
		}
	],
	statistics: {
		name: "prayut",
		score: 2,
		progress_array: [
			{
				category_id: 1,
				completed: 1,
				all: 1
			},
			{
				category_id: 2,
				completed: 1,
				all: 1
			},
			{
				category_id: 3,
				completed: 1,
				all: 1
			},
			{
				category_id: 4,
				completed: 1,
				all: 1
			}
		],
		overall: [
			{
				name: "completed",
				amount: 2
			},
			{
				name: "working",
				amount: 8
			},
			{
				name: "not started",
				amount: 13
			}
		],
		history: [
			{
				problem_id: 0,
				title: "",
				results: '',
				last_do: "2019-07-23T01:30:55.133864+07:00"
			},
		],
		active_pulse: [
			{
				date: "2019-07-22T00:00:00+07:00",
				submission_count: 18
			}
		],
		histogram: [
			{
				start: 0,
				stop: 10,
				amount: 5
			}
		]
	},
	submissions: [
		{
			submission_id: 1,
			user_id: 2,
			problem_id: 38,
			language_id: 10,
			src: "",
			submitted_at: "",
			score: 0,
			max_score: 1,
			runtime: 0.0049999999,
			memory_usage: 876
		}
	],
	users: [

	]
}
export const StateContext = React.createContext(initialState)

export default props => {
	let [state, dispatch] = React.useReducer(reducer, initialState)
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{props.children}
		</StateContext.Provider>
	)
}
