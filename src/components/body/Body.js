import './body.sass'
import CharactersList from "./CharactersList";
import CharacterDescr from "./CharacterDescr";
import bg from '../../resourses/img/bg.png'
const Body = ()=> {
    return(
        <div className={'container'}>
            <div className={'body'}>
                <CharactersList/>
                <CharacterDescr/>
                <div className={'imgContainer'}><img src={bg}/></div>
            </div>
        </div>
    )
}
export default Body