import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@vns-ignite-ui/react";

export default {
	title: "Typography/Text",
	component: Text,
	args: {
		children:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sed totam cum ex, illum magni dolore rerum minima similique quisquam sunt nisi officia aliquam minus, voluptatem laboriosam! Ipsum, numquam esse",
		size: "md",
	},
	argTypes: {
		size: {
			options: [
				"xxs",
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"4xl",
				"5xl",
				"6xl",
				"7xl",
				"8xl",
				"9xl",
			],
			control: {
				type: "select",
			},
		},
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: "Strong text", //filho
		as: "strong",
	},
};
