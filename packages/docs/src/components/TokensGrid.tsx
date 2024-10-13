import "../styles/tokens-grid.css";

interface ITokensGridProps {
	tokens: Record<string, string>;
	//esse tokens é um objeto (o Record representa isso. e os generics representa a tipagem da chave/propriedade e seu respectivo valor)
	hasRemValue?: boolean;
}
export function TokensGrid({ tokens, hasRemValue = false }: ITokensGridProps) {
	return (
		<table className="tokens-grid">
			<thead>
				<th>Name</th>
				<th>Value</th>
				{hasRemValue && <th>Pixels</th>}
			</thead>

			<tbody>
				{Object.entries(tokens).map(([key, value]) => {
					//acima estamos desestruturando o array q iremos receber como arg
					return (
						<tr key={key}>
							<td>{key}</td>
							<td>{value}</td>
							{hasRemValue && (
								<td>{Number(value.replace("rem", "")) * 16}px</td>
								//esse método replace
							)}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
