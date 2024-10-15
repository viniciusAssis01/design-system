import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
	return (
		<AvatarContainer>
			<AvatarImage {...props} />
			{/* avatar recebe o resto das props, pois lembre q a tag imagem pode receber algunas (e ñ só uma propriedade), como src, alt, className e tudo mais */}
			<AvatarFallback delayMs={600}>
				{/* essa props "delayMs" faz com que ele espere pelo menos 600ms p/mostrar o fallback, msm q a imagem ñ tenha sido carrecada
        fizemos isso para q ele ñ mostre o fallback ja no começo qndo a pg carregou, pois pode ser q a imagem do usuario vá carregar. 
        seria ruim mostrar o fallback e depois o avatar do usuario. 
        por isso colocamos o delay, para demorar um pouco para mostrar a fallback
        */}
				<User />
			</AvatarFallback>
		</AvatarContainer>
	);
}

Avatar.displayName = "Avatar";
