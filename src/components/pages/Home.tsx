import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetchSick from '../../utils/hooks/useFetchSick';
import localStorageService from '../../utils/services/localStorage.service';
import { setSickList } from '../../utils/store/sick';
import Template from '../templates/Template';

export default function Home() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const sick = useFetchSick(keyword);
  console.log(sick);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  useEffect(() => {
    if (localStorageService.has('sicks')) {
      const fetchedSickList = localStorageService.get('sicks');
      dispatch(setSickList(fetchedSickList));
    }
  }, []);
  return (
    <Template>
      <form>
        <input type='text' onChange={onChange} />
        <button type='submit'>검색</button>
      </form>
    </Template>
  );
}
