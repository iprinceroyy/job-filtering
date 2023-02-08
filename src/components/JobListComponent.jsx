import { useContext } from 'react';

import Job from './JobComponent';

import { CompaniesContext } from '../contexts/companyContext';
import { TagsContext } from '../contexts/tagsContext';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);
	const { tags } = useContext(TagsContext);
	console.log(tags);
	const res = companies.filter(
		({ role, level, tools, languages }) =>
			tags.includes(role) &&
			tags.includes(level) &&
			tools.some(tool => tags.includes(tool) && languages.some(language => tags.includes(language)))
	);

	console.log('res: ', res);

	return (
		<div className='Job__List'>
			{(tags.length !== 0 &&
				res.map(({ id, ...companyData }) => <Job key={id} companyData={companyData}></Job>)) ||
				companies.map(({ id, ...companyData }) => <Job key={id} companyData={companyData}></Job>)}
		</div>
	);
};

export default JobList;
