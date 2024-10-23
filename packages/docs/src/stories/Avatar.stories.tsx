import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@vns-ignite-ui/react";

export default {
	title: "Data display/Avatar",
	component: Avatar,
	args: {
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
	args: {
		src: undefined,
	},
};
