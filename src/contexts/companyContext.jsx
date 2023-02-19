import { useEffect, useContext } from 'react';
import { createContext, useState } from 'react';

import COMPANIES from '../data.json';
import { TagsContext } from './tagsContext';

export const CompaniesContext = createContext({
	companies: [],
	filteredCompanies: [],
});

export const CompaniesProvider = ({ children }) => {
	const [companies, setCompanies] = useState(COMPANIES);
	const [filteredCompanies, setFilteredCompanies] = useState([]);
	const { tags } = useContext(TagsContext);

	useEffect(() => {
		const newFilteredCompanies = companies.filter(company =>
			tags.every(tag => Object.values(company).flat(1).includes(tag))
		);

		setFilteredCompanies(newFilteredCompanies);
	}, [tags, companies]);

	const value = { companies, filteredCompanies };

	return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
};
