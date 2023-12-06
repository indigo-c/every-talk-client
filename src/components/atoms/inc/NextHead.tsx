import React from 'react';
import Head from 'next/head';

interface INextHeadProps {
  pageTitle: string;
}

function NextHead({ pageTitle }: INextHeadProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}

export default NextHead;
