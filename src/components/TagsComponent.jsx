import { useState, useContext } from 'react';

import { TagsContext } from '../contexts/tagsContext';

const Tags = ({ role, level, languages, tools }) => {
	const { tags, setUpdateTags } = useContext(TagsContext);

	const handleClick = e => {
		setUpdateTags(prevState => {
			console.log(tags);
			return [...prevState, e.target.innerText];
		});
	};

	return (
		<div className='Tags'>
			<p onClick={handleClick}>{role}</p>
			<p onClick={handleClick}>{level}</p>
			{languages.map((language, i) => (
				<p key={`${i}`} onClick={handleClick}>
					{language}
				</p>
			))}
			{tools.map((tool, i) => (
				<p key={`${i}`} onClick={handleClick}>
					{tool}
				</p>
			))}
		</div>
	);
};

export default Tags;
