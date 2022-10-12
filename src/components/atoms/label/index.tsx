import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Text } from 'components/atoms/text';
import { useTranslation } from "react-i18next";

interface Props {
  isOptional?: boolean;
}

export const Label: React.FC<Props> = props => {
  const { t } = useTranslation();
  return (
    <label className="a-label">
      {props.children}{' '}
      {props.isOptional && (
        <Text size="12" modifiers={['gray', 'bold']} inline>
          「{t("create.Optional")}」
        </Text>
      )}
    </label>
  );
};

export default hot(Label);
