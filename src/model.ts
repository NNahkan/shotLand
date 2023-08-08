export interface drink {
	id: number;
	name: string;
	type: string;
	liquors: Record<string, string>;
	juices: Record<string, string>;
	garnish: string[];
	description: string;
}