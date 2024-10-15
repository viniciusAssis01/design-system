import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
	size: number;
	currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
	return (
		<MultiStepContainer>
			<Label>
				Passo {currentStep} de {size}
			</Label>

			<Steps css={{ "--steps-size": size }}>
				{/* from é um método de objeto iteraveis (array ou objeto). nisso estamos descrevendo diretamente q vai ser um objeto
         Esse "length: size" vai criar um array com SIZE[lembra q é uma variavel] posições. 
        Como segundo argumento desse método from, recebe uma função (q vai ser executada em cada item do array); q recebe como parametros: o conteudo do array (_) e o indice (i). EX:
        Array.from({lenght:4}, (_,i)=> i+1) = [1, 2, 3, 4] basicamente estamos criando um array do zero.
         No final damos um map. o step vai estar preechido com base nesse atributo/props "active" (se tiver "ativo" recebe). para calcular essa propriedade vamos verificar se o currentStep (passo atual é maior ou igual ao numero desse "step" [q recebemos na função map] ) EX: então se o currentStep estiver no 4, todas as barrinhas vao estar actives.
        */}
				{Array.from({ length: size }, (_, i) => i + 1).map((step) => {
					return <Step key={step} active={currentStep >= step} />;
				})}
			</Steps>
		</MultiStepContainer>
	);
}

MultiStep.displayName = "MultiStep";
