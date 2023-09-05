import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import { SortIcon, SortAscIcon, SortDescIcon } from '../../components';
import { Server } from './types';
import { ListWrapper, ListControls, ListElement, SortBlock } from './styled';

export const List = ({ data }) => {
  const { theme } = useSelector(selectTheme);
  const [sort, setSort] = useState<string>('');
  const [listData, setListData] = useState<Server[]>(data);
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    setListData(data);
  }, [data]);

  useEffect(() => {
    if (sort.length) {
      const [key, order] = sort.split('-');
      setListData((prev: Server[]) => {
        return [...prev].sort((a: Server, b: Server) => {
          if (order === 'desc') {
            return a[key] > b[key] ? -1 : 1;
          } else {
            return b[key] > a[key] ? -1 : 1;
          }
        });
      });
    } else {
      setListData(data);
    }
  }, [sort]);

  useEffect(() => {
    setElements(
      listData.map((el: Server, index: number) => (
        <ListElement key={index}>
          <div>{el.name}</div>
          <div>{el.distance}</div>
        </ListElement>
      ))
    );
  }, [listData]);

  const getSortControl = (key: 'name' | 'distance') => {
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    const [sortKey, order] = sort.split('-');

    if (sortKey !== key || !sort.length) {
      return (
        <SortBlock>
          {title}
          <SortIcon
            color={theme.primaryText}
            tooltip={`Sort ${key}`}
            onClick={() => setSort(`${key}-asc`)}
          />
        </SortBlock>
      );
    } else {
      if (order === 'asc') {
        return (
          <SortBlock>
            {title}
            <SortAscIcon
              color={theme.primaryText}
              tooltip={`Sort ${key}`}
              onClick={() => setSort(`${key}-desc`)}
            />
          </SortBlock>
        );
      } else {
        return (
          <SortBlock>
            {title}
            <SortDescIcon
              color={theme.primaryText}
              tooltip={`Sort ${key}`}
              onClick={() => setSort(``)}
            />
          </SortBlock>
        );
      }
    }
  };

  return (
    <>
      <ListControls>
        {getSortControl('name')}
        {getSortControl('distance')}
      </ListControls>
      <ListWrapper>{elements}</ListWrapper>
    </>
  );
};
