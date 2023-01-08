import Company from './CompanyComponent';
import Criteria from './CriteriaComponent';
import Tags from './TagsComponent';

import logo from '../images/insure.svg';

const Job = () => {
	return (
		<div className='Job'>
			<div>
				<img src={`${logo}`} alt=''></img>
			</div>
			<div className='Job__Description'>
				<Company></Company>
				<p className='Position'>Senior Frontend Developer</p>
				<Criteria></Criteria>
			</div>
			<Tags></Tags>
		</div>
	);
};

export default Job;
