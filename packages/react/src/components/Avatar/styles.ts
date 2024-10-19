/* import { ComponentProps, ElementType } from "react"; */
import { styled } from "../../styles";

import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
	borderRadius: "$full",
	display: "inline-block",
	width: "$16",
	height: "$16",
	overflow: "hidden", //para q todo conteúdo fique dentro das dimensões desse avatarContainer, sem transbordar nada
});

export const AvatarImage = styled(Avatar.Image, {
	width: "100%",
	height: "100%",
	//a imagem vai ocupar todo o espaço do avatarContainer.
	objectFit: "cover", //para a imagem ñ distorcer
	borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
	//o Avatar.Fallback é o placeholder que aparece caso ñ tenha nenhum avatar ou ele ñ seja carregado.
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "$gray600",
	color: "$gray800",

	svg: {
		width: "$6",
		height: "$6",
	},
});

/* export interface BoxProps extends ComponentProps<typeof AvatarContainer> {
	as?: ElementType;
} */
