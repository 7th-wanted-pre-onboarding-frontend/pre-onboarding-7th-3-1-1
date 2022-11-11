import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Enter,
  Escape
} from '../../utils/constants/common';
import useFetchSick from '../../utils/hooks/useFetchSick';
import Atoms from '../atoms';
import Icons from '../icons';
import Molecules from '../molecules';

export default function Form() {
  const [keyword, setKeyword] = useState('');
  const [focus, setFoucs] = useState(false);
  const sick = useFetchSick(keyword);
  const focusEffect = focus ? '2px solid #007BE9' : '2px solid transparent';
  const ref = useRef<HTMLInputElement | null>(null);
  const isToggled = !focus && !keyword;
  const searchBoxRef = useRef<HTMLUListElement | null>(null);
  const [keyDownIndex, setKeyDownIndex] = useState<number>(-2);

  const onSetKeyword = (value: string) => {
    setKeyword(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    setKeyDownIndex(-2);
  };

  const onBlur = () => {
    setFoucs(false);
  };

  const onClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isButton = target.closest('button');
    const isSearchBox = target.closest('.search-box');

    if (isSearchBox) {
      return;
    }

    if (!isButton && ref.current) {
      ref.current.focus();
      setFoucs(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyword.length > 0) {
      if (event.key === ArrowDown) {
        setKeyDownIndex(keyDownIndex + 1);

        if (sick?.value.length === keyDownIndex + 1) {
          setKeyDownIndex(0);
        }
        return;
      }

      if (event.key === ArrowUp) {
        setKeyDownIndex(keyDownIndex - 1);

        if (keyDownIndex <= 0) {
          setKeyDownIndex(0);
        }
        return;
      }

      if (event.key === Escape) {
        setKeyDownIndex(keyDownIndex - 1);
        return;
      }

      if (event.key === Enter) {
        setKeyDownIndex(-2);
        if (sick) {
          setKeyword(sick.value[keyDownIndex].sickNm);
        }
        return;
      }
    }
  };

  useEffect(() => {
    const parent = searchBoxRef.current;
    if (!parent) return;
    const target = parent.children[keyDownIndex + 1];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [keyDownIndex]);

  return (
    <form
      style={{
        marginTop: '40px'
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        style={{
          width: '100%',
          height: '74px',
          position: 'relative',
          maxWidth: '490px',
          margin: '0 auto',
          borderRadius: '9999px',
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
          onKeyDown={handleKeyDown}
          value={keyword}
          ref={ref}
        />
        {isToggled && (
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
        {!isToggled && (
          <Molecules.SearchBox
            ref={searchBoxRef}
            keyword={keyword}
            data={sick}
            keyDownIndex={keyDownIndex}
            onSetKeyword={onSetKeyword}
          />
        )}
      </div>
    </form>
  );
}
