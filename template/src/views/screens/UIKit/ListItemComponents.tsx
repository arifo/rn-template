import React from 'react';

import { ListItem, ContainerView } from 'views/components';
import { useAppTheme } from 'views/contexts/ThemeContext';

export const ListItemComponents = () => {
  const {} = useAppTheme(null);

  return (
    <ContainerView.Secondary
      headerProps={{
        title: 'List Items',
        leading: 'back_button',
      }}>
      <ListItem.Compact label={'ListItemCompact'} debug />
      <ListItem.Standard
        label={'ListItemStandard'}
        subLabel={'Massalectus Phaselluspraesent '}
        debug
      />
    </ContainerView.Secondary>
  );
};
