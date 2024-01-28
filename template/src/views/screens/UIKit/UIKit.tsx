import React from 'react';

import { ListItemCompact } from 'components/uiKit/ListItems/ListItemCompact.tsx';
import { UIKitRoutes, UIKitStackScreenPropTypes } from 'navigation/Routes.ts';
import { ContainerView, SimpleListHeading } from 'views/components';

type Props = UIKitStackScreenPropTypes<typeof UIKitRoutes.UIKit>;
const UIKit = ({ navigation }: Props) => {
  const navTo = (route: UIKitRoutes) => {
    navigation.navigate(route);
  };

  return (
    <ContainerView.Main headerProps={{ title: 'UIKit', leading: 'back_button' }}>
      <ListItemCompact label={'Typography'} onPress={() => navTo(UIKitRoutes.UIKitTypography)} />

      <SimpleListHeading label={'Components'} />
      <ListItemCompact
        label={'List Headings'}
        onPress={() => navTo(UIKitRoutes.UIKitListHeading)}
      />
      <ListItemCompact label={'List Items'} onPress={() => navTo(UIKitRoutes.UIKitListItems)} />
    </ContainerView.Main>
  );
};

export default UIKit;
