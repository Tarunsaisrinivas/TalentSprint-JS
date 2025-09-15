function Dice() {

    const random =  Math.floor(Math.random() * 6)
    const random2 =  Math.floor(Math.random() * 6)
    const equal = random === random2
    return (
        <div>
            <h1>Roll the dice</h1>
            {equal && <h1>you win</h1>}
            <p> first dice stored value : {random}</p>
            <p> second dice stored value : {random2}</p>

            {/*             
            <p>{Math.floor(Math.random()*6)+1}</p> */}


        </div>
    )
}

export default Dice