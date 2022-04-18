import { Dialog, DialogContent } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './notificationDialog.scss';

const NotificationDialog = ({ status, open, handleClose, content }) => {
    return (
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent className='errDialog'>
                    <div className='errDialog__content'>
                        {status === 'error' ? (
                            <ErrorIcon htmlColor='red' />
                        ) : (
                            <CheckCircleIcon htmlColor='green' />
                        )}
                        <span className='errDialog__content__text'>{content}</span>
                    </div>
                    <button className='errDialog__content__btn' onClick={handleClose}>
                        Oke
                    </button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default NotificationDialog;
