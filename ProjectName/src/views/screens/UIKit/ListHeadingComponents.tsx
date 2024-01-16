import React from 'react';

import { useAppTheme } from 'theme';
import { ContainerView, SimpleListHeading } from 'views/components';

export const ListHeadingComponents = () => {
  const { colors } = useAppTheme(null);
  return (
    <ContainerView
      title={'List Headings'}
      scrollable={true}
      contentViewProps={{ contentContainerStyle: { paddingBottom: 24 } }}>
      <SimpleListHeading label={'SimpleListHeading'} debug />
    </ContainerView>
  );
};
