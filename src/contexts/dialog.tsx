import { createContext, useContext, useState } from 'react';

import { Dialog } from '@/components';

type DialogContext = {
  openDialog: (content: React.ReactNode) => void;
  closeDialog: () => void;
};

const dialogContext = createContext<DialogContext>({} as DialogContext);

export function useDialog(): DialogContext {
  return useContext(dialogContext);
}

type DialogProviderProps = {
  children: React.ReactNode;
};
export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  function openDialog(dialogContent: React.ReactNode) {
    setDialogContent(dialogContent);
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <dialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        {dialogContent}
      </Dialog>
    </dialogContext.Provider>
  );
};
