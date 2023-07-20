import './headerStyle.sass'
const Header = () => {
    return(
        <div className={'container'}>
            <div className={'header'}>
                <div className={'leftHeader'}> <a href={'#'} className={'leftHeader_link'}>Marvel</a> information portal</div>
                <div className={'rightHeader'}><a href={'#'} className={'active'}>Characters</a> / <a href={'#'}>Comics</a></div>
            </div>
        </div>

    )
}

export default Header;