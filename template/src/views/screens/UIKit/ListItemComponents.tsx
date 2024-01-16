import React from 'react';

import { useAppTheme } from 'theme';
import { ContainerView, ListItemCompact } from 'views/components';

export const ListItemComponents = () => {
  const { colors } = useAppTheme(null);

  return (
    <ContainerView
      title={'ListItems'}
      scrollable={true}
      contentViewProps={{ contentContainerStyle: { paddingBottom: 24 } }}>
      <ListItemCompact label={'ListItemCompact'} debug />
    </ContainerView>
  );
};
