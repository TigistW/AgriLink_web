import React from 'react'

function Methods({ title, explanation }) {
  return (
    <div className='text-start'>
      <strong>{title}:</strong>{"   "}{explanation}
    </div>
  );
}

export default Methods
