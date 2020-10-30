import { Dialog, DialogTitle, Link } from '@material-ui/core';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link onClick={() => setOpen(true)}>Sign up?</Link>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Sign up</DialogTitle>
        <div>This will be where the signup for will live</div> 
      </Dialog>
    </>
  );
};
