import Company from './CompanyComponent';
import Criteria from './CriteriaComponent';
import Tags from './TagsComponent';

import logo from '../assets/images/insure.svg';

import { TagsContext } from '../contexts/tagsContext';
import { useContext } from 'react';

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

const Job = ({ companyData }) => {
	const {
		company,
		//logo,
		new: newAdded,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	} = companyData;

	const mentionedTags = [role, level, ...languages, ...tools];
	const { tags } = useContext(TagsContext);

	return (
		<div className='Job'>
			<div>
				<img src={logo} alt=''></img>
			</div>
			<div className='Job__Description'>
				<Company companyName={company} newAdded={newAdded} featured={featured}></Company>
				<p className='Position'>{position}</p>
				<Criteria postedAt={postedAt} contract={contract} location={location}></Criteria>
			</div>
			<Tags mentionedTags={mentionedTags}></Tags>
		</div>
	);
};

export default Job;
