import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

//qndo nosso componente recebe props/parametros, a interface é feita antes do componente.
export interface CheckboxProps
	extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxContainer {...props}>
			<CheckboxIndicator asChild>
				{/* qndo o nosso componente possui essa propriedade "asChild" (do proprio radix); tal componente vai funcionar como um fragment jsx (<></>); ou seja, ñ vai ser criado em tela. então só vai pegar as propriedade de estar visivel ou ñ e passar para o elemento filho*/}
				<Check weight="bold" />
			</CheckboxIndicator>
		</CheckboxContainer>
	);
}

Checkbox.displayName = "Checkbox";
