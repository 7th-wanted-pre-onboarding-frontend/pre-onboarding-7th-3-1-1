import { Sicks } from './Sick';

export type CacheItem = {
  value: Sicks;
  date: number;
};

export type Cache = {
  [key: string]: CacheItem;
};
