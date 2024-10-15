import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@vns-ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
	title: "Button", //titulo da pg desse storie
	component: Button, //qual componente vamos documentar
	args: {
		children: "enviar",
	},
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: "secondary",
		children: "Create New",
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: "tertiary",
		children: "Cancel",
	},
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: "sm",
	},
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Proximo passo
				<ArrowRight weight="bold" />
			</>
		),
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
};
