import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

//veja q estamos estilizando o nosso componente estilizado stitches Text, para criar um novo componente estilizado stitches (Label)
export const Label = styled(Text, {
	color: "$gray200",

	defaultVariants: {
		size: "xs",
	},
});

export const Steps = styled("div", {
	display: "grid",
	//para falar qntas colunas esse grid tem, precisamos trazer tal informação do argumento size passado na execução de tal componente
	gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
	gap: "$2",
	marginTop: "$1",
});

export const Step = styled("div", {
	height: "$1",
	borderRadius: "$px",
	backgroundColor: "$gray600",

	variants: {
		active: {
			true: {
				backgroundColor: "$gray100",
			},
		},
	},
});
