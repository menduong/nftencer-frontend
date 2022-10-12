import { Header } from 'components/organisms/header';
import { Main } from 'components/organisms/main';
import { Pagemeta } from 'components/util/pagemeta';
import React from 'react';
import { hot } from 'react-hot-loader/root';

interface Props {
  className?: string;
  title: string;
  main?: boolean;
}

export const Layout: React.FC<Props> = props => {
  return (
    <>
      <Pagemeta title={props.title} />
      { props.main? (
        <div className="t-layoutEx">
          <Header />
          <Main className="o-main">{props.children}</Main>
        </div>
      ) : (
      <div className="t-layout">
        <Header />
        <Main className="o-main">{props.children}</Main>
      </div>
      )}
    </>
  );
};

export default hot(Layout);
