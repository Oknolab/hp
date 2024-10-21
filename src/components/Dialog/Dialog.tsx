import { Dialog as HeadlessDialog, DialogPanel, DialogBackdrop } from '@headlessui/react';

type DialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};
export const Dialog = ({ isOpen, onClose = () => {}, children }: DialogProps) => {
  return (
    <HeadlessDialog className="relative z-50" open={isOpen} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 flex w-full items-center justify-center border border-red-500">
        <DialogPanel className="max-w-lg space-y-4 rounded-md border bg-white p-12">
          {children}
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
};
