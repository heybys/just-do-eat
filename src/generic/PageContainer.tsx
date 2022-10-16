import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props extends PropsWithChildren {
  isHeader?: boolean;
  isFooter?: boolean;
}

const PageContainer = ({
  isHeader = true,
  isFooter = true,
  children
}: Props) => {
  return (
    <div>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
};

export default PageContainer;
