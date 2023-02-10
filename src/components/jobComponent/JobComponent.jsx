import Company from '../companyComponent/CompanyComponent';
import Criteria from '../criteriaComponent/CriteriaComponent';
import Tags from '../tagsComponent/TagsComponent';

import logo from '../../assets/images/insure.svg';

import './JobComponentStyles.scss';

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
