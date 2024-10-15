import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@vns-ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
	title: "Button", //titulo da pg desse storie
	component: Button, //qual componente vamos documentar
	args: {
		children: "enviar",
	},
	argTypes: {
		variant: {
			//o botão tem uma propriedade chamada variant.
			//e as opções possíveis (logo o valor vai ser um array) para essa propriedade variant sao
			options: ["primary", "secondary", "Tertiary"],
			//e a forma de controle para o usuário trocar entre essas opções, vai ser um inline-radio
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
			action: "click", //nome q vamos dar para nossa ação
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
