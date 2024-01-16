import React, { useMemo } from 'react';

import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { TypeScale } from 'components/RNText/typography.ts';
import { createStyles, useAppTheme } from 'theme';

type RNTextProps = React.FC<
  TextProps & {
    typeScale?: keyof typeof TypeScale;
  }
>;

export const RNText: RNTextProps = ({ style, typeScale = 'body_text', ...props }) => {
  const { styles } = useAppTheme(_styles);

  const textStyles = () => {
    const txtStyles: StyleProp<TextStyle> = [styles.text];
    if (typeScale && TypeScale[typeScale] !== undefined) {
      txtStyles.push(TypeScale[typeScale]);
    }
    if (style) {
      txtStyles.push(style);
    }
    return StyleSheet.flatten(txtStyles);
  };
  return <Text {...props} style={textStyles()} />;
};

const _styles = createStyles(theme => ({
  text: { color: theme.colors.text.primary },
}));
