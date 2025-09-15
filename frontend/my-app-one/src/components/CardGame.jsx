function CardGame() {
    const id1 = Math.floor(Math.random() * 20) + 1;
    const id2 = Math.floor(Math.random() * 20) + 1;

    const url1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id1}.png`;
    const url2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id2}.png`;

    const winner = id1 === id2; // comparing ids makes more sense than urls

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-3xl flex mx-auto">Card Game</h1>

                <div className="text-center">
                    {winner && (
                        <h2 className="text-green-400 text-3xl">You Win 🎉</h2>
                    ) }
                </div>

                <div className="container mx-auto flex w-1/2">
                    <img src={url1} alt="pokemon1" className="w-1/2" />
                    <img src={url2} alt="pokemon2" className="w-1/2" />
                </div>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="bg-zinc-700 hover:bg-zinc-800 hover:cursor-pointer text-white font-bold py-2 px-4 rounded flex mx-auto mt-4"
            >
                Reload
            </button>
        </>
    );
}

export default CardGame;
