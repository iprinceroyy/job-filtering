import './CriteriaComponentStyles.scss';

const Criteria = ({ postedAt, contract, location }) => {
	return (
		<div className='Criteria'>
			<p>{postedAt}</p>
			<p>
				<span className='dot'></span>
				<span>{contract}</span>
			</p>
			<p>
				<span className='dot'></span>
				<span>{location}</span>
			</p>
		</div>
	);
};

export default Criteria;
