import './App.scss';
import JobList from './assets/components/JobListComponent';

function App() {
	return (
		<div className='App'>
			<div className='App__Header'></div>
			<div className='App__Main'>
				<JobList></JobList>
			</div>
		</div>
	);
}

export default App;
