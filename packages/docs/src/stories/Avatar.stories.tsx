import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@vns-ignite-ui/react";

export default {
	title: "Data display/Avatar",
	component: Avatar, //componente q vamos mostrar
	args: {
		//argumentos/props q nosso componente vai receber
		src: "https://github.com/viniciusAssis01.png",
		alt: "Vinicius Assis",
	},
	argTypes: {
		src: {
			control: {
				type: "text",
			},
		},
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	//para falhar no carregamento da imagem e assim mostrar a fallback (tipo um placeholder)
	args: {
		src: undefined,
	},
};
