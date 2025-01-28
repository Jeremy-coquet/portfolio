export interface AboutType {
	about: {
		image: string;
		description: string; 
	}
	skills: SkillsType[];
}

interface SkillsType {
	title: string;
	logo: string;
}