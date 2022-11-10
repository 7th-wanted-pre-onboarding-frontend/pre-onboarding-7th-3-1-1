import React from 'react';
import Atoms from '../atoms';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <Atoms.Container>
      <header>헤더</header>
      <main>{children}</main>
    </Atoms.Container>
  );
}
