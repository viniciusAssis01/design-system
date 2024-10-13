import {
	fontSizes,
	fontWeights,
	fonts,
	colors,
	lineHeights,
	radii,
	space,
} from "@vns-ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		//para conseguirmos mapear propriedades do css para algum tipo de token
		height: "space",
		width: "space",
		//estamos falando para ele trazer como valores (no intelicence) da propriedade css HEIGHT, os valores do token space.
	},
	theme: {
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
	},
});
