import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { useTranslation } from "react-i18next";

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
  filterAndSort: React.ReactNode;
  category: React.ReactNode;
  title?:boolean;
  
}

export const Barmenu: React.FC<Props> = props => {
  const { t } = useTranslation();
  return (
    <div className={mapModifiers('o-exploremenu', props.modifiers)}>
      <div className="o-exploremenu_category">
       {props.title && <Heading modifiers={[ 'pinkheader']}>{t("Myitem.Myitem")}</Heading>}
        <div className="o-exploremenu_tabs">{props.category}</div>
      </div>
      <div className="o-exploremenu_filter">{props.filterAndSort}</div>
    </div>
  );
};

export default hot(Barmenu);
