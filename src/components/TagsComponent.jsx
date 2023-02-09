import { useContext } from 'react';

import { TagsContext } from '../contexts/tagsContext';

const Tags = ({ mentionedTags }) => {
	const { setUpdateTags } = useContext(TagsContext);

	const handleClick = e => {
		setUpdateTags(prevState =>
			prevState.includes(e.target.innerText) ? [...prevState] : [...prevState, e.target.innerText]
		);
	};

	return (
		<div className='Tags'>
			{mentionedTags.map((tag, i) => (
				<p key={`${i}`} onClick={handleClick}>
					{tag}
				</p>
			))}
		</div>
	);
};

export default Tags;
