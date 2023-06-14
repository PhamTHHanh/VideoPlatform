import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props) => {

    return(
        <div className='app_container'>
            {props.children}
            <ToastContainer/>
        </div>
    )
}

export default MainLayout