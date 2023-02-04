import { useContext } from 'react';
import './App.scss';
import JobList from './components/JobListComponent';

import { TagsContext } from './contexts/tagsContext';
import SearchTags from './components/SearchTags';

function App() {
	const { tags } = useContext(TagsContext);

	return (
		<div className='App'>
			<div className='App__Header'></div>
			<div className='App__Main'>
				{+tags.length && <SearchTags tags={tags}></SearchTags>}
				<JobList></JobList>
			</div>
		</div>
	);
}

export default App;
