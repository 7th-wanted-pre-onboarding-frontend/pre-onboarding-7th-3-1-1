import React, { useMemo } from 'react';
import Molecules from '.';
import { CacheItem } from '../../utils/types/Cache';
import Atoms from '../atoms';

type Props = {
  keyword: string;
  data: CacheItem | null;
};

export default function SearchBox({ keyword, data }: Props) {
  const recommeded = useMemo(() => {
    if (data === null) {
      return [];
    }
    return data.value;
  }, [data]);

  const onClick = () => {
    console.log('클릭');
  };

  console.log('recommeded:', recommeded);

  return (
    <Atoms.Wrapper
      borderRadius='24px'
      position='absolute'
      top='calc(100% + 12px)'
      left='0'
      display='flex'
      flexDirection='column'
      className='search-box'
      padding='24px 0 16px;'
      boxShadow='rgba(30, 32, 37, 0.1) 0px 2px 10px'
    >
      <Molecules.SickItem title={keyword} onClick={onClick} />
      <div
        style={{
          margin: '10px 0'
        }}
      >
        <Atoms.Title2 color='#6a737b'>추천 검색어</Atoms.Title2>
      </div>
      <ul>
        {recommeded.map(({ sickCd, sickNm }) => (
          <Molecules.SickItem key={sickCd} title={sickNm} onClick={onClick} />
        ))}
      </ul>
    </Atoms.Wrapper>
  );
}
