import React from 'react';
import MainLayout from './src/components/layouts/Main';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
	return <MainLayout {...props}>{element}</MainLayout>;
};
