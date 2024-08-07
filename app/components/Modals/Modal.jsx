import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import '../../styles/modal.css';

const Modal = ({ open, setOpen, title, children }) => {
    return (
        <Dialog.Root
            open={open}
            onOpenChange={setOpen}
            className="p-0 bg-[#F0F0F0]"
        >
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title></Dialog.Title>
                    <Dialog.Description></Dialog.Description>
                    <div className="flex justify-between items-center">
                        <h2 className='text-[1rem] py-2 font-medium text-black rounded-md w-fit'>{title}</h2>
                    </div>
                    <div>
                        <Dialog.Close asChild>
                            <button className="IconButton cursor-pointer" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" stroke='black' className="w-[18px] hover:fill-slate-500 hover:stroke-slate-500" style={{}}>
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Dialog.Close>
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child)
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal