import characters from '../../resourses/img/characters.jpg'
const CharactersList = () =>{
    return(
        <div className={'charactersList'}>
            {Array.from(Array(9).fill(0).map((item, index) => {
                    return (
                        <div key={index} className={'menItem'}>
                            <div className={'imgContainer'}><img src={characters}/></div>
                            <div className={'menName'}>Name</div>
                        </div>
                    )
                })
            )}
        </div>
        )
}

export  default CharactersList;