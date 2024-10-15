import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@vns-ignite-ui/react";

export default {
	title: "Form/Text Input",
	component: TextInput,
	args: {},
	decorators: [
		(Story) => {
			return (
				<Box
					as={"label"}
					css={{ display: "flex", flexDirection: "column", gap: "$2" }}
				>
					<Text size={"sm"}>Email address</Text>
					{Story()}
					{/* assim a renderização do nosso componente stories (no caso TextInput) vai ficar dentro de uma box */}
				</Box>
			);
		},
	],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
	args: {
		//args é como se fosse o atributos da tag html
		placeholder: "Type your name",
	},
};
export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
	},
};
export const withPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: "cal.com/",
	},
};
