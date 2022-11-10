import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';
import Molecules from '.';

type Props = {
  sickNm?: string;
  keyword: string;
  isActivated?: boolean;
  onClick: (value: string) => void;
};

export default function SickItem({
  sickNm,
  keyword,
  isActivated,
  onClick
}: Props) {
  const defaultContent = sickNm || keyword;
  return (
    <Atoms.SickItemWrapper
      onClick={() => onClick(defaultContent)}
      isActivated={!!isActivated}
    >
      <Icons.SmallSearch />
      <Molecules.SickTitle inputValue={keyword} recommend={sickNm} />
    </Atoms.SickItemWrapper>
  );
}
