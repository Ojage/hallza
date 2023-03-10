import { mode, whiten, darken } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: (props: any) => ({
    alignItems: 'center',
    padding: {
      base: '1.2rem',
      md: '1.8rem',
      lg: '2rem',
      xl: '2.2rem',
    },
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.15s',
    color: mode(darken('#000', 0), whiten('white', 0))(props),
    borderRadius: 'xl',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    bg: mode(darken('white', 0), whiten('cardColor', 0))(props),
  }),
  // Four variants: huge, flat, medium and tall
  variants: {
    huge: () => ({
      height: '443px',
      width: '744px',
    }),
    flat: () => ({
      height: '81px',
      width: '738px',
      padding: '0',
    }),
    medium: () => ({
      width: '331px',
      height: '123px',
      paddingLeft: '12px',
      paddingTop: '12px',
      alignItems: 'left',
    }),
    tall: () => ({
      height: '561px',
      width: '358px',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'huge',
  },
});
