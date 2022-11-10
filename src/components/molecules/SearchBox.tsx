import React, { forwardRef, useMemo } from 'react';
import Molecules from '.';
import { CacheItem } from '../../utils/types/Cache';
import Atoms from '../atoms';

type Props = {
  keyword: string;
  data: CacheItem | null;
  keyDownIndex: number;
};

export default forwardRef<HTMLUListElement, Props>(function SearchBox(
  { keyword, data, keyDownIndex },
  ref
) {
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
      padding='0 0 16px 0'
      boxShadow='rgba(30, 32, 37, 0.1) 0px 2px 10px'
      overflow='hidden'
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          padding: '24px 0 8px 0'
        }}
      >
        <Molecules.SickItem title={keyword} onClick={onClick} />

        <Atoms.Title2 color='#6a737b'>추천 검색어</Atoms.Title2>
      </div>
      <ul
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
          borderRadius: '24px'
        }}
        ref={ref}
      >
        {recommeded.map(({ sickCd, sickNm }, idx) => (
          <Molecules.SickItem
            key={sickCd}
            title={sickNm}
            onClick={onClick}
            isActivated={keyDownIndex === idx}
          />
        ))}
      </ul>
    </Atoms.Wrapper>
  );
});
