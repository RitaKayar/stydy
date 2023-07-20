import './randomCharacterStyle.sass'
import thor from'../../resourses/img/Thor.png'
import group from '../../resourses/img/Group.png'



const RandomCharacter = () =>{
    return(
        <div className={'container'}>
            <div className={'randomCharacters'}>
                <div className={'left'}>
                    <div className={'imgContainer'}><img src={thor}/></div>
                    <div className={'leftText'}>
                        <div className={'name'}>Thor</div>
                        <div className={'descriptions'}>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
                        <div className={'buttonsContainer'}>
                            <button className={'buttonRed'}>Homepage</button>
                            <button>wiki</button>
                        </div>
                    </div>
                </div>
                <div className={'right'}>
                    <div className={'title'}>
                        Random character for today! <br/> Do you want to get to know him better?
                    </div>
                    <div className={'title subTitle'}>Or choose another one</div>
                    <button className={'buttonRed'}>TRY IT</button>
                    <div className={'imgContainer'}><img src={group}/></div>
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;