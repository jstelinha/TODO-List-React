import React from 'react';
import { IconTrash } from '@tabler/icons-react';

function TrashIcon({ onClick }) {
  return (
    <button onClick={onClick}>
      <IconTrash className="text-cinza-300 hover:text-red-600" />
    </button>
  );
}

export default TrashIcon;
