import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
	backgroundColor: "$gray900",
	padding: "$3 $4",
	borderRadius: "$sm",
	boxSizing: "border-box",
	border: "2px solid $gray900",
	display: "flex",
	alignItems: "baseline",

	"&:has(input:focus)": {
		//aplique a seguinte estilização no container q tiver o elemento filho input, com focus
		borderColor: "$ignite300",
	},

	"&:has(input:disabled)": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
});

//vamos criar uma estilização especifica para o prefixo, pois no texto dentro do input ha um prefixo q ñ é editavel (podemos ver isso lá no Figma)
export const Prefix = styled("span", {
	fontFamily: "$default",
	fontSize: "$sm",
	color: "$gray400",
	fontWeight: "regular",
});

export const Input = styled("input", {
	fontFamily: "$default",
	fontSize: "$sm",
	color: "$white",
	fontWeight: "regular",
	background: "transparent",
	border: 0,
	width: "100%",

	"&:focus": {
		outline: 0,
	},

	"&:disabled": {
		cursor: "not-allowed",
	},

	"&:placeholder": {
		color: "$gray400",
	},
});
