import React from 'react';

import { ContainerView, SimpleListHeading } from 'views/components';
import { useAppTheme } from 'views/contexts/ThemeContext';

export const ListHeadingComponents = () => {
  const {} = useAppTheme(null);
  return (
    <ContainerView.Secondary
      headerProps={{
        title: 'List Headings',
        leading: 'back_button',
      }}>
      <SimpleListHeading label={'SimpleListHeading'} debug />
    </ContainerView.Secondary>
  );
};
