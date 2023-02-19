import { useContext } from 'react';

import Job from '../jobComponent/JobComponent';
import { CompaniesContext } from '../../contexts/companyContext';

import './JobListComponentStyles.scss';

const JobList = () => {
	const { companies, filteredCompanies } = useContext(CompaniesContext);

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
