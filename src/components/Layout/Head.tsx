import type { NextPage } from 'next';
import NextHead from 'next/head';

type Props = {
  title: string;
  description: string;
  iconHref?: string;
  children?: React.ReactNode;
};

const Head: NextPage<Props> = ({
  title,
  description,
  iconHref = '/favicon.ico',
  children,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <link rel="icon" href={iconHref} />
      <link rel="apple-touch-icon" href={iconHref} />
      <meta property="og:image" content="" />
      <meta name="twitter:image" content="" />
      <link rel="canonical" href="" />
      {children}
    </NextHead>
  );
};

export default Head;
