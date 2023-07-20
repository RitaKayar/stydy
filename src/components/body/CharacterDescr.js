import thor from '../../resourses/img/Thor.png'
import characters from "../../resourses/img/characters.jpg";
const CharacterDescr = () =>{
    return(
        <div className={'characterDescr'}>
            <div>
                <div><img src={thor}/></div>
                <div>
                    <div>Name</div>
                    <div className={'buttonsContainer'}>
                        <button className={'buttonRed'}>Homepage</button>
                        <button>wiki</button>
                    </div>
                </div>
            </div>
            <div>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</div>
            <div>
                <div>Comics:</div>
                <div>
                    {Array.from(Array(10).fill(0).map((item, index) => {
                            return (
                                <div className={'menItem'}>
                                    <div className={'imgContainer'}><img src={characters}/></div>
                                    <div className={'menName'}>Name</div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default CharacterDescr