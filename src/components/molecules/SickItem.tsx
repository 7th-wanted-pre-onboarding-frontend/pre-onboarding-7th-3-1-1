import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';

type Props = {
  title: string;
  isActivated?: boolean;
  onClick: () => void;
};

export default function SickItem({ title, isActivated, onClick }: Props) {
  return (
    <Atoms.SickItemWrapper onClick={onClick} isActivated={!!isActivated}>
      <Icons.SmallSearch />
      <Atoms.Body2 color='#000000'>{title}</Atoms.Body2>
    </Atoms.SickItemWrapper>
  );
}
