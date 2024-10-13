import { colors } from "@vns-ignite-ui/tokens";
//importar todas os cores do nosso tokens

import { getContrast } from "polished";

export function ColorsGrid() {
	// vamos percorrer todas as cores (q é um obj e a chave/propriedade e o nome e o valor é o hexadecimal da cor)
	//como Object.entries retorna um array com varios arrays dentro; onde o array de indice 0 é a chave e o indice 1 é o valor. então podemos fazer o seguinte: vamos desestruturar o array, recuperando a key q vai ser o nome da cor e resgatar tbm seu respectivo valor.
	//vamos retornar uma div > como estamos retornando algo dentro do map, temos q passar uma key q vai ser a propria key (nome da cor) > vamos estilizar essa div em linha, cujo cor de fundo vai ser a propria cor da key
	return Object.entries(colors).map(([key, color]) => {
		return (
			<div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						fontFamily: "monospace",
						color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
						//essa função getContrast retorna uma numero q representa o nivel de contraste entre as 2 cores passada como parâmetro. nisso fizemos um ternário
					}}
				>
					<strong>${key}</strong>
					<span>{color}</span>
					{/* esse sinal de dolar é para indicar q isso é um token */}
				</div>
			</div>
		);
	});
}
