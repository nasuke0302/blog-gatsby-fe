import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { SiteSettingsQuery } from '../../generated/graphqlTypes';
import '../../styles/global.css';

const links = [
	{ href: '/', text: 'Home', icon: 'la-home' },
	{ href: '/about', text: 'About', icon: 'la-lightbulb' },
	{ href: '/authors', text: 'Our Experts', icon: 'la-user-edit' }
];

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
				<link
					rel="stylesheet"
					href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
				></link>
			</Helmet>

			<nav className="px-4 py-2 pl-8 flex flex-row flex-nowrap justify-center md:justify-start items-center bg-green-600 shadow-md shadow-zinc-400">
				{links.map((link, i) => (
					<Link
						key={i}
						to={link.href}
						className="text-white font-5 no-underline p-4 hover:bg-green-300 hover:text-gray-600 rounded-md transition"
					>
						<i className={`las ${link.icon} block text-center pr-1`}></i>
						{link.text}
					</Link>
				))}
			</nav>

			<main className="grow max-w-4xl m-auto py-8 px-4 lg:px-0">{children}</main>

			<footer className="p-8 bg-green-800">
				<div className="flex flex-row flex-nowrap justify-center align-center">
					{links.map((link, i) => (
						<Link
							key={i}
							to={link.href}
							className="text-white font-5 no-underline px-4 py-2 hover:bg-green-300 hover:text-gray-600 rounded-md transition"
						>
							{link.text}
						</Link>
					))}
					<a
						href="https://icons8.com"
						target="_blank"
						className="text-white font-5 no-underline px-4 py-2 hover:bg-green-300 hover:text-gray-600 rounded-md transition"
					>
						icons8
					</a>
				</div>
				<div className="m-auto text-center">
					<p className="text-white">&copy; {new Date().getFullYear()} Nasuke</p>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
