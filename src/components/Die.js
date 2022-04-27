

export default function Die(props)
{

    let {value , isHeld , holdDice} = props;
    let styles = {
         backgroundColor : isHeld? "#59E391" : "white"
    }
    return (
        <div className="die"
        onClick={holdDice}
        style={styles}>
            <span className="die-num"
            >
                {value} 
            </span>
        </div>
    )
}