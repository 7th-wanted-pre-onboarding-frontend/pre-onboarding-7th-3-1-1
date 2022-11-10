import React from 'react';
import Atoms from '../atoms';

interface Props {
  inputValue: string;
  recommend?: string;
}

export default function SickTitle({ inputValue, recommend }: Props) {
  if (recommend === undefined) {
    return (
      <Atoms.Body2>
        <strong style={{ fontWeight: '700' }}>{inputValue}</strong>
      </Atoms.Body2>
    );
  }

  const splited = recommend.split(inputValue);

  return (
    <Atoms.Body2>
      {splited[0]}
      <strong style={{ fontWeight: '700' }}>{inputValue}</strong>
      {splited[1]}
    </Atoms.Body2>
  );
}
