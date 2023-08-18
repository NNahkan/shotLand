export interface drink {
	id: number;
	type: string;
	name: string;
	liquors: Record<string, string>;
	juices: Record<string, string>;
	garnish: string[];
	description: string;
}