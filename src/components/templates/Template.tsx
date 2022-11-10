import React from 'react';
import Atoms from '../atoms';
import Molecules from '../molecules';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <Atoms.Container>
      <Molecules.Header />
      <main>{children}</main>
    </Atoms.Container>
  );
}
