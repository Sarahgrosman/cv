import propTypes from 'prop-types'
import windows from '../assets/windows.png'

const Header = ({title, subTitle}) => {
    return (
        <div className="headerCV">
           <div className='titleHeaderCV'>
               <h1>{title}</h1>
               <h2>{subTitle}</h2>
           </div>          
           <div><img src={windows} /></div>
       </div>
    )
}
Header.defaultProps = {
    title:'Microsoft Corporation',
    subTitle:'Herzliya, Israel'
}
Header.propTypes = {
    title: propTypes.string,
    subTitle:propTypes.string
}



export default Header
