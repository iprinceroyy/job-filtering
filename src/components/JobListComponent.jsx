import { useContext } from 'react';

import Job from './JobComponent';

import { CompaniesContext } from '../contexts/companyContext';
import { TagsContext } from '../contexts/tagsContext';

const JobList = () => {
	const { companies } = useContext(CompaniesContext);
	const { tags } = useContext(TagsContext);
	console.log(tags);
	companies.map(company => console.log(Object.values(company).flat()));
	//const filterCompanies = companies.filter(company => company.includes(tags));

	// "company": "Insure",
	// 		"logo": "./images/insure.svg",
	// 		"new": false,
	// 		"featured": false,
	// 		"position": "Junior Frontend Developer",
	// 		"role": "Frontend",
	// 		"level": "Junior",
	// 		"postedAt": "2w ago",
	// 		"contract": "Full Time",
	// 		"location": "USA Only",
	// 		"languages": ["JavaScript"],
	// 		"tools": ["Vue", "Sass"]

	return (
		<div className='Job__List'>
			{companies.map(({ id, ...companyData }) => {
				const {
					company,
					new: newAdded,
					featured,
					position,
					postedAt,
					contract,
					location,
				} = companyData;
				return <Job key={id} companyData={companyData}></Job>;
			})}
		</div>
	);
};

export default JobList;
