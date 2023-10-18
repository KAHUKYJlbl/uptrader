import { Dispatch, SetStateAction } from 'react';

export const handleModalOpen = (setter: Dispatch<SetStateAction<boolean>>) => {
  setter(true);
}

export const handleModalClose = (setter: Dispatch<SetStateAction<boolean>>) => {
  setter(false);
}
