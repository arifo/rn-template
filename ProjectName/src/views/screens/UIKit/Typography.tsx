import React from 'react';

import { View } from 'react-native';

import { FontFamily, TypeScale } from 'components/RNText/typography.ts';
import { useAppTheme } from 'theme';
import { ContainerView, SimpleListHeading, RNText } from 'views/components';

export const UIKitTypography = () => (
  <ContainerView
    title={'Typography'}
    scrollable={true}
    contentViewProps={{ contentContainerStyle: { paddingBottom: 24 } }}>
    <SimpleListHeading label={'Font Family'} />
    <FontFamilyText fontFamily={FontFamily.black} text={'FontFamily.black'} />
    <FontFamilyText fontFamily={FontFamily.extraBold} text={'FontFamily.extraBold'} />
    <FontFamilyText fontFamily={FontFamily.bold} text={'FontFamily.bold'} />
    <FontFamilyText fontFamily={FontFamily.semiBold} text={'FontFamily.semiBold'} />
    <FontFamilyText fontFamily={FontFamily.medium} text={'FontFamily.medium'} />
    <FontFamilyText fontFamily={FontFamily.regular} text={'FontFamily.regular'} />
    <FontFamilyText fontFamily={FontFamily.light} text={'FontFamily.light'} />
    <FontFamilyText fontFamily={FontFamily.extraLight} text={'FontFamily.extraLight'} />
    <FontFamilyText fontFamily={FontFamily.thin} text={'FontFamily.thin'} />
    <FontFamilyText fontFamily={FontFamily.italic} text={'FontFamily.italic'} />

    <SimpleListHeading label={'Type Scale'} />

    <TypeScaleText
      typeScale={'heading_1'}
      usage={'Main section headings, creating a strong impact and visual hierarchy'}
    />
    <TypeScaleText
      typeScale={'heading_2'}
      usage={'Subheadings, providing hierarchy within sections'}
    />
    <TypeScaleText typeScale={'heading_3'} usage={'Smaller headings, introducing subsections'} />
    <TypeScaleText
      typeScale={'subheading_1'}
      usage={'Larger body text suitable for introductory content'}
    />
    <TypeScaleText
      typeScale={'subheading_2'}
      usage={'Smaller subheadings, maintaining hierarchy'}
    />
    <TypeScaleText
      typeScale={'nav_bar_title'}
      usage={'Titles in navigation bars, providing clear headings'}
    />
    <TypeScaleText
      typeScale={'body_text'}
      usage={'Main content text for paragraphs and descriptions'}
    />
    <TypeScaleText
      typeScale={'caption'}
      usage={'Small-sized text, such as captions and metadata'}
    />
    <TypeScaleText
      typeScale={'primary_button'}
      usage={'More emphasized call-to-action button for critical actions'}
    />
    <TypeScaleText
      typeScale={'common_button'}
      usage={'General call-to-action buttons throughout the app'}
    />
    <TypeScaleText
      typeScale={'form_label'}
      usage={'Labels for form elements, providing context and clarity'}
    />
    <TypeScaleText
      typeScale={'input_field'}
      usage={'Font size for input fields within forms, ensuring readability'}
    />
    <TypeScaleText
      typeScale={'list_item_text'}
      usage={'Text used for listing items, maintaining consistency across lists'}
    />
  </ContainerView>
);

const FontFamilyText = ({ fontFamily, text }: { fontFamily: string; text: string }) => (
  <View style={{ paddingHorizontal: 8 }}>
    <RNText typeScale={'subheading_2'} style={{ fontFamily: fontFamily }}>
      {FontFamily.name} - {text}
    </RNText>
  </View>
);

const TypeScaleText = ({
  typeScale,
  usage,
}: {
  typeScale: keyof typeof TypeScale;
  usage: string;
}) => {
  const { colors } = useAppTheme(null);

  return (
    <View style={{ paddingHorizontal: 8, paddingBottom: 12 }}>
      <RNText
        style={{ borderWidth: 1, borderColor: colors.stroke.separatorPrimary, marginBottom: 8 }}
        typeScale={typeScale}>
        {typeScale}
      </RNText>
      <RNText typeScale={'caption'}>{usage}</RNText>
    </View>
  );
};
