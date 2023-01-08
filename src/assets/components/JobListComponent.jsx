import { useContext } from 'react';

import { CompaniesContext } from '../../contexts/productContext';
import Job from './JobComponent';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);

	return (
		<div className='Job__List'>
			{companies.map(company => (
				<Job></Job>
			))}
		</div>
	);
};

export default JobList;
