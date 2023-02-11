import { useContext } from 'react';

import Job from '../jobComponent/JobComponent';

import { CompaniesContext } from '../../contexts/companyContext';
import { TagsContext } from '../../contexts/tagsContext';

import './JobListComponentStyles.scss';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);
	const { tags } = useContext(TagsContext);

	const filteredCompanies = companies.filter(company =>
		tags.every(tag => Object.values(company).flat(1).includes(tag))
	);

	return (
		<div className='Job__List'>
			{(filteredCompanies.length !== 0 &&
				filteredCompanies.map(({ id, ...companyData }) => (
					<Job key={id} companyData={companyData}></Job>
				))) ||
				companies.map(({ id, ...companyData }) => <Job key={id} companyData={companyData}></Job>)}
		</div>
	);
};

export default JobList;
