import React, { useRef, useState } from 'react';
import useFetchSick from '../../utils/hooks/useFetchSick';
import Atoms from '../atoms';
import Icons from '../icons';

export default function Form() {
  const [keyword, setKeyword] = useState('');
  const [focus, setFoucs] = useState(false);
  const sick = useFetchSick(keyword);
  const focusEffect = focus ? '2px solid #007BE9' : '2px solid transparent';
  const ref = useRef<HTMLInputElement | null>(null);

  console.log('sick:', sick);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const onBlur = () => {
    setFoucs(false);
  };

  const onClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isButton = target.closest('button');

    if (!isButton && ref.current) {
      ref.current.focus();
      setFoucs(true);
    }
  };

  return (
    <form
      style={{
        marginTop: '40px'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '74px',
          position: 'relative',
          maxWidth: '490px',
          margin: '0 auto',
          borderRadius: '9999px',
          overflow: 'hidden',
          background: '#fff',
          border: focusEffect
        }}
        onClick={onClick}
        aria-hidden='true'
      >
        <Atoms.Input
          type='text'
          onChange={onChange}
          onBlur={onBlur}
          value={keyword}
          ref={ref}
        />
        {!focus && !keyword && (
          <Atoms.Paragraph
            position='absolute'
            top='50%'
            left='24px'
            transform='translateY(-50%)'
            display='flex'
            alignItems='center'
            gap='4px'
          >
            <Icons.SmallSearch />
            <Atoms.Body color='#AAB2BA'>질환 명을 입력해주세요.</Atoms.Body>
          </Atoms.Paragraph>
        )}
        <Atoms.CircleButton
          type='button'
          size={48}
          backgroundColor='#007BE9'
          position='absolute'
          top='50%'
          right='-18px'
          transform='translate(-50%, -50%)'
          zIndex={10}
        >
          <Icons.Search />
        </Atoms.CircleButton>
      </div>
    </form>
  );
}
