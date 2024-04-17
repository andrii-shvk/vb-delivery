import classNames from "classnames";
import ReactModal from "react-modal";
import cls from './Modal.module.scss';
import { useLayoutEffect, useState } from "react";

ReactModal.setAppElement('#root');
const variantClasses = {
    rightModal: 'rightModal',
    normal: 'modal',
    headerMenu: 'headerMenu'
}

const Modal = (props) => {

    const {
        isOpen,
        children,
        variant,
        width,
        height,
        border,
        scroll,
        setIsOpen
    } = props;

    const variantClass = variantClasses[variant] || variantClasses.normal;

    const [closing, setIsClosing] = useState(false);
    useLayoutEffect(() => {
        if(!isOpen) {
            setIsClosing(true);
            document.querySelector('#back_to_top').classList.remove('none');
            document.querySelector('body').classList.remove('lock');
        } else {
            setIsClosing(false);
            document.querySelector('body').classList.add('lock');
            document.querySelector('#back_to_top').classList.add('none');
        }
    }, [isOpen])

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <ReactModal
            style={
                {
                    content: {
                        maxWidth: width,
                        maxHeight: height,
                        borderRadius: border,
                        overflowY: scroll
                    }
                }
            }
            className={classNames(cls.animate, cls[variantClass], {
                [cls.closing]: closing
            })}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modalOpen}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onRequestClose={closeModal}
            parentSelector={() => document.querySelector('#app')}
        >
            {children}
            <button className={cls.close} onClick={closeModal}></button>
        </ReactModal>
    );
}
 
export {Modal};