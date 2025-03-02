// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: never[] // Empty array
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'HLF',
		aboutText:
			'Software Engineer passionate about creating innovative and efficient solutions. Specializing in Flutter development with expertise in Design Patterns, TDD, SOLID principles, and Clean Architecture.',
		logo: {
			src: '/logo.svg',
			alt: 'Pedro Francisco Portfolio',
			text: 'HLF',
		}
	},
	footerColumns: [], // Empty array - no navigation columns
	subFooter: {
		copywriteText: '© Pedro Henrique Lopes Francisco 2025.'
	}
}
