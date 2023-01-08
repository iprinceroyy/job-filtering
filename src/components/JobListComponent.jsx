import { useContext } from 'react';

import Job from './JobComponent';
import { CompaniesContext } from '../contexts/companyContext';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);

	return (
		<div className='Job__List'>
			{companies.map(({ id, ...companyData }) => (
				<Job key={id} companyData={companyData}></Job>
			))}
		</div>
	);
};

export default JobList;
