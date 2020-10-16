import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Fastfood } from '@material-ui/icons';
import React from 'react';
import { ISearchProps } from '../../domains/locations';

interface IProps {
  savedSearch: ISearchProps[];
}

export default ({savedSearch}: IProps) => {

  return (
    <List>
      {savedSearch.map(({searchQuery, limit, category}) => (
        <ListItem>
          <ListItemIcon>
            <Fastfood/>
          </ListItemIcon>
          <ListItemText>
            {searchQuery}{category === 'all' ? undefined : ' Vegetarian'}
          </ListItemText>
        </ListItem>
      ))}
    </List>
)};
