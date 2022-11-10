import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';

type Props = {
  title: string;
  onClick: () => void;
};

export default function SickItem({ title, onClick }: Props) {
  return (
    <Atoms.SickItemWrapper onClick={onClick}>
      <Icons.SmallSearch />
      <Atoms.Body2 color='#000000'>{title}</Atoms.Body2>
    </Atoms.SickItemWrapper>
  );
}
