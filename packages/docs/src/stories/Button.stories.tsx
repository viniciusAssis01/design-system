import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@vns-ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
	title: "Button",
	component: Button,
	args: {
		children: "enviar",
	},
	argTypes: {
		variant: {
			options: ["primary", "secondary", "Tertiary"],

			control: {
				type: "inline-radio",
			},
		},
		size: {
			options: ["sm", "md"],
			control: {
				type: "select",
			},
		},
		disabled: {
			control: {
				type: "boolean",
			},
		},
		onClick: {
			action: "click",
		},
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
