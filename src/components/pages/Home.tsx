import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import localStorageService from '../../utils/services/localStorage.service';
import { setSickList } from '../../utils/store/sick';
import Atoms from '../atoms';
import Organisms from '../organisms';
import Template from '../templates/Template';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorageService.has('sicks')) {
      const fetchedSickList = localStorageService.get('sicks');
      dispatch(setSickList(fetchedSickList));
    }
  }, []);

  return (
    <Template>
      <section
        style={{
          padding: '80px 0 160px',
          background: '#CAE9FF'
        }}
      >
        <Atoms.Section>
          <header>
            <Atoms.Title>
              국내 모든 임상시험 검색하고
              <br /> 온라인으로 참여하기
            </Atoms.Title>
          </header>
          <Organisms.Form />
        </Atoms.Section>
      </section>
    </Template>
  );
}
