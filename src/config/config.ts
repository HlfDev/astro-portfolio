// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Pedro Francisco | Software Engineer & Flutter Developer',
	siteDescription:
		'Pedro Francisco is a Software Engineer specializing in Flutter development with expertise in Design Patterns, TDD, SOLID principles, and Clean Architecture.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Pedro Francisco Portfolio'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
