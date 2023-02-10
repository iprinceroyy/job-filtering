import { useContext } from 'react';
import './App.scss';
import JobList from './components/jobListComponent/JobListComponent';

import { TagsContext } from './contexts/tagsContext';
import SearchTags from './components/tagsComponent/SearchTags';

function App() {
	const { tags } = useContext(TagsContext);

	return (
		<div className='App'>
			<div className='App__Header'></div>
			<div className='App__Main'>
				{tags.length !== 0 && <SearchTags tagsList={tags}></SearchTags>}
				<JobList></JobList>
			</div>
		</div>
	);
}

export default App;
