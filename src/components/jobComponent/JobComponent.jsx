import Company from '../companyComponent/CompanyComponent';
import Criteria from '../criteriaComponent/CriteriaComponent';
import Tags from '../tagsComponent/TagsComponent';

import icons from '../../icons';

import './JobComponentStyles.scss';

const Job = ({ companyData }) => {
	const {
		company,
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

	const formatName = name => name.toLowerCase().replaceAll(' ', '_').replaceAll('.', '');

	const mentionedTags = [role, level, ...languages, ...tools];

	return (
		<div className='Job'>
			<div>
				<img src={icons[formatName(company)]} alt=''></img>
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
