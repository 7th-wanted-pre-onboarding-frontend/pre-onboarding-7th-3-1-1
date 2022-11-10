import React, { useState } from 'react';
import useFetchSick from '../../utils/hooks/useFetchSick';
import Atoms from '../atoms';
import Icons from '../icons';

export default function Form() {
  const [keyword, setKeyword] = useState('');
  const [focus, setFoucs] = useState(false);
  const sick = useFetchSick(keyword);
  const focusEffect = focus ? '2px solid #007BE9' : '2px solid transparent';

  console.log('sick:', sick);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const onFocus = () => {
    setFoucs(true);
  };

  const onBlur = () => {
    setFoucs(false);
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
      >
        <Atoms.Input
          type='text'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {!focus && (
          <p
            style={{
              position: 'absolute',
              top: '50%',
              left: '24px',
              transform: 'translateY(-50%)',
              color: '#AAB2BA'
            }}
          >
            질환 명을 입력해주세요.
          </p>
        )}
        <Atoms.CircleButton
          type='submit'
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
