import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@vns-ignite-ui/react";

export default {
	title: "Button", //titulo da pg desse storie
	component: Button, //qual componente vamos documentar
	args: {
		children: "enviar",
	},
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
	args: {
		size: "big",
	},
};
