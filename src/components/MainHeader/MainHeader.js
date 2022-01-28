import logo from '../../logo.svg'
import './MainHeader.css';

const MainNav = () => {
    return (
        <header>
            <div className='img'>
                <img src={logo} />
            </div>
            <div className='content'>
                <div className='header-title'>
                    <h1>This is my canvas with React!</h1>
                </div>
                <div className='header-text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus sit amet nisi at suscipit. Curabitur euismod venenatis leo, nec tristique nisi ornare eu.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default MainNav;