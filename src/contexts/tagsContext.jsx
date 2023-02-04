import { createContext, useState } from 'react';

export const TagsContext = createContext({
	tags: [],
	setUpdateTags: () => {},
});

export const TagsProvider = ({ children }) => {
	const [tags, setUpdateTags] = useState([]);
	const value = { tags, setUpdateTags };

	return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
