import './CriteriaComponentStyles.scss';

const Criteria = ({ postedAt, contract, location }) => {
	return (
		<div className='Criteria'>
			<p>{postedAt}</p>
			<p>
				<span className='dot'></span>
				{contract}
			</p>
			<p>
				<span className='dot'></span>
				{location}
			</p>
		</div>
	);
};

export default Criteria;
