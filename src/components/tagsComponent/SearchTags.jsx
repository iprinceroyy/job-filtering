import crossIcon from '../../assets/images/icon-remove.svg';
import { useContext } from 'react';
import { TagsContext } from '../../contexts/tagsContext';

const SearchTags = ({ tagsList }) => {
	const { setUpdateTags } = useContext(TagsContext);

	const handleClear = () => {
		setUpdateTags([]);
	};

	const handleCross = e => {
		setUpdateTags(prevState =>
			prevState.filter(
				prev => prev !== e.target.closest('.List--Tags').querySelector('p').innerText
			)
		);
	};

	return (
		<div className='Search Search__Tags'>
			<div className='List Search--List'>
				{tagsList.map((tag, i) => (
					<div className='List--Tags' key={`${i}`}>
						<p>{tag}</p>
						<div onClick={handleCross}>
							<img src={crossIcon}></img>
						</div>
					</div>
				))}
			</div>
			<div>
				<p onClick={handleClear}>clear</p>
			</div>
		</div>
	);
};

export default SearchTags;
