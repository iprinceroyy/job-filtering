import { useContext } from 'react';

import Job from '../jobComponent/JobComponent';

import { CompaniesContext } from '../../contexts/companyContext';
import { TagsContext } from '../../contexts/tagsContext';

import './JobListComponentStyles.scss';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);
	const { tags } = useContext(TagsContext);

	let filteredCompanies = [];
	filteredCompanies = companies.filter(
		({ role, level, tools, languages }) =>
			tags.includes(role) ||
			tags.includes(level) ||
			tools.some(tool => tags.includes(tool)) ||
			languages.some(language => tags.includes(language))
	);

	return (
		<div className='Job__List'>
			{(tags.length !== 0 &&
				filteredCompanies.map(({ id, ...companyData }) => (
					<Job key={id} companyData={companyData}></Job>
				))) ||
				companies.map(({ id, ...companyData }) => <Job key={id} companyData={companyData}></Job>)}
		</div>
	);
};

export default JobList;
