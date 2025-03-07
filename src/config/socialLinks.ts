// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'linkedin',
		link: 'https://linkedin.com/in/hlfdev',
		icon: 'linkedin-icon'
	},
	{
		name: 'github',
		link: 'https://github.com/hlfdev',
		icon: 'github-icon'
	},
	{
		name: 'email',
		link: 'mailto:contact@hlfdev.com',
		icon: 'mail-icon'
	}
]
