import { StyleSheet } from 'react-native';

import { s, lhm } from 'utils/scaler.ts';

export const FontFamily = {
  name: 'Poppins',
  black: 'Poppins-Black',
  extraBold: 'Poppins-ExtraBold',
  bold: 'Poppins-Bold',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  extraLight: 'Poppins-ExtraLight',
  thin: 'Poppins-Thin',
};

/**
 * @typedef {object} TypeScale - Type scale object
 * @property {object} heading_1 - Main section headings, creating a strong impact.
 * @property {object} heading_2 - Subheadings, providing hierarchy within sections.
 * @property {object} heading_3 - Smaller headings, introducing subsections.
 * @property {object} subheading_1 - Larger body text suitable for introductory content.
 * @property {object} subheading_2 - Smaller subheadings, maintaining hierarchy.
 * @property {object} nav_bar_title - Titles in navigation bars, providing clear headings.
 * @property {object} body_text - Main content text for paragraphs and descriptions.
 * @property {object} caption - Small-sized text, such as captions and metadata.
 * @property {object} primary_button - More emphasized call-to-action button for critical actions.
 * @property {object} common_button - General call-to-action buttons throughout the app.
 * @property {object} form_label - Labels for form elements, providing context and clarity.
 * @property {object} input_field - Font size for input fields within forms, ensuring readability.
 * @property {object} list_item_text - Text used for listing items, maintaining consistency across lists.
 */
export const TypeScale = StyleSheet.create({
  /**
   * Main section headings, creating a strong impact.
   */
  heading_1: {
    fontFamily: FontFamily.bold,
    fontSize: s(32),
    lineHeight: lhm(32, 1.5),
  },

  /**
   * Subheadings, providing hierarchy within sections.
   */
  heading_2: {
    fontFamily: FontFamily.bold,
    fontSize: s(28),
    lineHeight: lhm(28, 1.5),
  },

  /**
   * Smaller headings, introducing subsections.
   */
  heading_3: {
    fontFamily: FontFamily.semiBold,
    fontSize: s(24),
    lineHeight: lhm(24, 1.5),
  },

  /**
   * Larger body text suitable for introductory content.
   */
  subheading_1: {
    fontFamily: FontFamily.regular,
    fontSize: s(20),
    lineHeight: lhm(20, 1.5),
  },

  /**
   * Smaller subheadings, maintaining hierarchy.
   */
  subheading_2: {
    fontSize: s(18),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(18, 1.5),
  },

  /**
   * Main content text for paragraphs and descriptions.
   */
  body_text: {
    fontSize: s(14),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(14, 1.5),
  },

  /**
   * Small-sized text, such as captions and metadata.
   */
  caption: {
    fontSize: s(12),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(12, 1.5),
  },

  /**
   * General call-to-action buttons throughout the app.
   */
  common_button: {
    fontSize: s(16),
    fontFamily: FontFamily.semiBold,
    lineHeight: lhm(15, 1.5),
  },

  /**
   * More emphasized call-to-action button for critical actions.
   */
  primary_button: {
    fontSize: s(18),
    fontFamily: FontFamily.semiBold,
    lineHeight: lhm(18, 1.5),
  },

  /**
   * Titles in navigation bars, providing clear headings.
   */
  nav_bar_title: {
    fontSize: s(20),
    fontFamily: FontFamily.semiBold,
    lineHeight: lhm(20, 1.3),
  },

  /**
   * Text used for listing items, maintaining consistency across lists.
   */
  list_item_text: {
    fontSize: s(16),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(16, 1.5),
  },

  /**
   * Labels for form elements, providing context and clarity.
   */
  form_label: {
    fontSize: s(16),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(14, 1.5),
  },

  /**
   * Font size for input fields within forms, ensuring readability.
   */
  input_field: {
    fontSize: s(16),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(16, 1.5),
  },

  primary_text: {
    fontSize: s(16),
    fontFamily: FontFamily.semiBold,
    lineHeight: lhm(16, 1.5),
  },
  secondary_text: {
    fontSize: s(14),
    fontFamily: FontFamily.regular,
    lineHeight: lhm(14, 1.5),
  },
});
