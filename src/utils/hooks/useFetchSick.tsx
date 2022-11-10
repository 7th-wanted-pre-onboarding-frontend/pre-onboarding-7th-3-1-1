import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SickService from '../services/sick.service';
import { AppDispatch, RootState } from '../store';
import { getSickList } from '../store/sick';
import { Sicks } from '../types/Sick';

let timer: NodeJS.Timeout | null = null;
export default function useFetchSick(keyword: string): {
  value: Sicks;
  date: number;
} | null {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => {
    return state.sick;
  });
  const sick = useMemo(() => {
    if (keyword === '' || !data[keyword]) {
      return null;
    }
    return data[keyword];
  }, [data, keyword]);

  useEffect(() => {
    const fetchData = () => {
      if (!keyword) return;

      if (sick) {
        if (SickService.isExpired(sick.date)) {
          dispatch(getSickList(keyword));
        }
      } else {
        dispatch(getSickList(keyword));
      }
    };
    const debouce = (callback: () => void) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callback, 500);
    };

    debouce(fetchData);
  }, [keyword]);

  return sick;
}
