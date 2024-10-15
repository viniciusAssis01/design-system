import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@vns-ignite-ui/react";

export default {
	title: "Surfaces/box",
	component: Box,
	args: {
		children: <Text>testando o elemento box</Text>,
	},
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
