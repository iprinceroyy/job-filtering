import crossIcon from '../assets/images/icon-remove.svg';

const SearchTags = ({ tags }) => {
	return (
		<div className='Header Search__Tags'>
			{tags.map(tag => (
				<div>
					<div>
						<img src={crossIcon}></img>
					</div>
					<p>{tag}</p>
				</div>
			))}
		</div>
	);
};

export default SearchTags;
