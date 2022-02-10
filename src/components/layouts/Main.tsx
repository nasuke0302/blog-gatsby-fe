import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteSettingsQuery } from '../../generated/graphqlTypes';
import '../../styles/global.css';

const links = [{ href: '/', text: 'Home' }];

const MainLayout = ({ children }) => {
	const data = useStaticQuery<SiteSettingsQuery>(graphql`
		query siteSettings {
			sanitySiteSettings(_id: { eq: "siteSettings" }) {
				title
				description
				keywords
			}
		}
	`);

	const { title, description, keywords } = data.sanitySiteSettings ?? {};

	return (
		<div className="bg-gray-100">
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords?.toString()} />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<nav className="p-4 pl-8 flex flex-row flex-nowrap justify-center md:justify-start items-center bg-green-600">
				{links.map((link) => (
					<a href={link.href} className="text-white font-5 no-underline p-4">
						{link.text}
					</a>
				))}
			</nav>

			<main className="grow max-w-4xl m-auto py-8 px-4 lg:px-0">{children}</main>

			<footer className="p-8 bg-green-800">
				<div className="flex flex-row flex-nowrap justify-center align-center">
					{links.map((link) => (
						<a href={link.href} className="text-white font-5 no-underline p-4">
							{link.text}
						</a>
					))}
				</div>
				<div className="m-auto text-center">
					<p className="text-white">&copy; {new Date().getFullYear()} Nasuke</p>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
