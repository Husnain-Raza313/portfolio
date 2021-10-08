import './Topbar.css'
import PersonIcon from '@mui/icons-material/Person';
import { Mail } from '@material-ui/icons';

export default function Topbar(props) {
    return (
        <div className={'topbar ' + ( props.menuOpen && 'topbar-active')} id='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Mackey.</a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon' />
                        <span>+923113091372</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon' />
                        <span>@hussnainrezamir72@gmail.com</span>
                    </div>
                </div>
                
                <div className='right'>
                    <div className='hamburger' onClick= {()=> props.setMenuOpen(!(props.menuOpen))
                    }>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
