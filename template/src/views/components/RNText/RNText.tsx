import React from 'react';

import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { TypeScale } from 'components/RNText/typography.ts';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type RNTextProps = TextProps & {
  typeScale?: keyof typeof TypeScale;
  color?: string;
};

export const RNText = React.forwardRef<Text, RNTextProps>(
  ({ style, color, typeScale = 'body_text', ...props }: RNTextProps, ref) => {
    const { styles } = useAppTheme(_styles);

    const textStyles = () => {
      const txtStyles: StyleProp<TextStyle> = [styles.text];
      if (typeScale && TypeScale[typeScale] !== undefined) {
        txtStyles.push(TypeScale[typeScale]);
      }
      if (color) {
        txtStyles.push({ color });
      }
      if (style) {
        txtStyles.push(style);
      }
      return StyleSheet.flatten(txtStyles);
    };
    return <Text ref={ref} {...props} style={textStyles()} />;
  },
);

const _styles = createStyles(theme => ({
  text: { color: theme.colors.text.primary },
}));
