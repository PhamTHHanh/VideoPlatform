import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';

export const Loader = () => (
    <div className='root_loader'>
        <CircularProgress/>
    </div>
)

export const showToast = (type,msg) => {
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        default:
            return false

    }
}

