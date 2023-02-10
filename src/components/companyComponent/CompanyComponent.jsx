import './CompanyComponentStyles.scss';

const Company = ({ companyName, newAdded, featured }) => {
	return (
		<div className='Company'>
			<p className='Company__Name'>{companyName}</p>
			{newAdded && <p className='Company--new'>new!</p>}
			{featured && <p className='Company--featured'>featured</p>}
		</div>
	);
};
export default Company;
