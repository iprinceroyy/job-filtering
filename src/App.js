import { useContext } from 'react';
import './App.scss';
import JobList from './components/jobListComponent/JobListComponent';

import { TagsContext } from './contexts/tagsContext';
import SearchTags from './components/tagsComponent/SearchTags';

function App() {
	const { tags } = useContext(TagsContext);

	return (
		<main className='App'>
			<div className='App__Header'>
				<h1>Job Filtering App</h1>
				{tags.length !== 0 && <SearchTags tagsList={tags}></SearchTags>}
			</div>
			<div className='App__Main'>
				<JobList></JobList>
			</div>
		</main>
	);
}

export default App;
