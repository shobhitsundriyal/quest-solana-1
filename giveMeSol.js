const {
	Connection,
	PublicKey,
	LAMPORTS_PER_SOL,
	clusterApiUrl,
} = require('@solana/web3.js')

const giveSols = async () => {
	try {
		const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
		const myAddress = new PublicKey(
			'3ctqVke6bD8bntMw17TE42t4jiuadqWKhNV8FF5gpmoY'
		) //Your wallet address

		const signature = await connection.requestAirdrop(
			myAddress,
			2 * LAMPORTS_PER_SOL
		)

		await connection
			.confirmTransaction(signature)
			.then(async () =>
				console.log(
					'Balance: ',
					(await connection.getBalance(myAddress)) / LAMPORTS_PER_SOL
				)
			)
	} catch {
		;(err) => console.log(err)
	}
}
giveSols()
