import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';

export default function Header() {
  return (
    <header
      style={{
        height: '56px'
      }}
    >
      <Atoms.Section height='100%'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Icons.Logo />
        </div>
      </Atoms.Section>
    </header>
  );
}
