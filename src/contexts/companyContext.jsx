import { createContext, useState } from 'react';

import COMPANIES from '../data.json';

export const CompaniesContext = createContext({
	companies: [],
});

export const CompaniesProvider = ({ children }) => {
	const [companies, setCompanies] = useState(COMPANIES);
	const value = { companies };

	return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
};
