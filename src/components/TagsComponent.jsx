const Tags = ({ role, level, languages, tools }) => {
	return (
		<div className='Tags'>
			<p>{role}</p>
			<p>{level}</p>
			{languages.map((language, i) => (
				<p key={i}>{language}</p>
			))}
			{tools.map((tool, i) => (
				<p key={i}>{tool}</p>
			))}
		</div>
	);
};

export default Tags;
