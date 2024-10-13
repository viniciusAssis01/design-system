import { ComponentProps } from "react";
import { styled } from "./styles";

export const Button = styled("button", {
	fontFamily: "$default",
	backgroundColor: "$ignite500",
	borderRadius: "$md",
	padding: "$2 $4",
	border: 0,
	fontWeight: "$bold",
	color: "$white",

	variants: {
		size: {
			small: {
				fontSize: 14,
				padding: "$2 $4",
			},
			big: {
				fontSize: 14,
				padding: "$2 $4",
			},
		},
	},

	//para definir as variantes padrão, qndo ñ for informado o valor das variantes
	defaultVariants: {
		size: "small", //dando um CTRL+ESPAÇO mostra os valores que temos para essa variante size (small, big)
	},
});

export type ButtonProps = ComponentProps<typeof Button>;
