import './CriteriaComponentStyles.scss';

const Criteria = ({ postedAt, contract, location }) => {
	return (
		<div className='Criteria'>
			<p>{postedAt}</p>
			<p>{contract}</p>
			<p>{location}</p>
		</div>
	);
};

export default Criteria;
