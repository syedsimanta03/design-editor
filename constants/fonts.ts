import { IFontFamily } from '@common/interfaces'

export const editorFonts = ([
  {
    family: 'Inter',
    variants: ['regular', '700'],
    subsets: ['latin'],
    version: 'v14',
    lastModified: '2020-09-02',
    files: {
      regular: 'https://d2dmfwb9k858np.cloudfront.net/Inter-Regular.ttf',
      '700': 'https://d2dmfwb9k858np.cloudfront.net/Inter-Bold.ttf'
    },
    category: 'sans-serif',
    kind: 'webfonts#webfont',
    id: 'XlkY15br4YAcR5t4XkOLbqMa'
  },
  {
    family: 'Plus Jakarta Sans',
    variants: ['regular', '500', '600', '700', 'italic'],
    subsets: ['latin'],
    version: 'v12',
    lastModified: '2020-09-10',
    files: {
      '500': 'https://d2dmfwb9k858np.cloudfront.net/PlusJakartaSans-Medium.ttf',
      '600': 'https://d2dmfwb9k858np.cloudfront.net/PlusJakartaSans-SemiBold.ttf',
      '700': 'https://d2dmfwb9k858np.cloudfront.net/PlusJakartaSans-Bold.ttf',
      regular: 'https://d2dmfwb9k858np.cloudfront.net/PlusJakartaSans-Regular.ttf',
      italic: 'https://d2dmfwb9k858np.cloudfront.net/PlusJakartaSans-Italic.ttf',
    },
    category: 'sans-serif',
    kind: 'webfonts#webfont',
    id: '8scXWwSI9TCSHsrYS10BnvVd'
  },
  {
    family: 'Space Mono',
    variants: ['regular', '700', 'italic'],
    subsets: ['latin'],
    version: 'v6',
    lastModified: '2020-09-02',
    files: {
      italic: 'https://d2dmfwb9k858np.cloudfront.net/SpaceMono-Italic.ttf',
      '700': 'https://d2dmfwb9k858np.cloudfront.net/SpaceMono-Bold.ttf',
      regular: 'https://d2dmfwb9k858np.cloudfront.net/SpaceMono-Regular.ttf'
    },
    category: 'serif',
    kind: 'webfonts#webfont',
    id: '4yllXEs7lVlXuC5EDWcpSO7V'
  },
  {
    family: 'Libre Caslon Text',
    variants: ['regular', '700', 'italic'],
    subsets: ['latin'],
    version: 'v6',
    lastModified: '2020-09-02',
    files: {
      italic: 'https://d2dmfwb9k858np.cloudfront.net/LibreCaslonText-Italic.ttf',
      '700': 'https://d2dmfwb9k858np.cloudfront.net/LibreCaslonText-Bold.ttf',
      regular: 'https://d2dmfwb9k858np.cloudfront.net/LibreCaslonText-Regular.ttf'
    },
    category: 'serif',
    kind: 'webfonts#webfont',
    id: '1yllXEs7lVlXuD5EDWcpSO7V'
  }
] as unknown) as IFontFamily[]
