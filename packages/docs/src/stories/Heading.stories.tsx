import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@vns-ignite-ui/react";

export default {
	title: "Typography/Heading",
	component: Heading,
	args: {
		children: "Custom title",
		size: "md",
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		//aqui sao os argumentos/propeidades q nosso componente pode receber
		children: "H1 heading", //filho
		as: "h1",
	},
	//para inserir uma descrição do componente
	parameters: {
		docs: {
			description: {
				story:
					"Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
			},
			//h2 está entre crase, pois é uma marcação do markdow
		},
	},
};
