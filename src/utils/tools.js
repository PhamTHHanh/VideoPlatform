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

export const convertPath = (text) => {
    console.log(text)
    let lowerPath = text.toLowerCase();
    return lowerPath.replace(/ /g, "-");
}

// export const convertToText = (path) => {
//     let arrStr = path.split("-");
//     let text = ""
//     arrStr.map((str) => {
//    word.charAt(0).toUpperCase()
 //   + word.slice(1)
//     })
// }
