import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Text } from 'components/atoms/text';
import { Toggle } from 'components/atoms/toggle';
import { Label } from 'components/atoms/label';
import { useFormikContext } from 'formik';
import { useTranslation } from "react-i18next";
type Modifier = '2col';

interface Props {
  modifiers?: Modifier | Modifier[];
  fieldName?: string;
  lead?: string;
  isOptional?: boolean;
  caption?: string[] | string;
  captionfee?:boolean
  isCaptionForInput?: boolean;
  toggleName?: string;
  name?: string;
  errorMessage?: string;
  className?: string;
}

export const Fieldrow: React.FC<Props> = ({
  fieldName,
  isOptional,
  modifiers,
  children,
  lead,
  caption,
  captionfee,
  toggleName,
  isCaptionForInput,
  name,
  errorMessage,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { errors, touched } = useFormikContext<any>();
  const isShowError = name && touched[name] && errors[name];
  const { t } = useTranslation();
  return (
    <div className={`${mapModifiers('m-fieldrow', modifiers, isShowError && 'error')} ${props.className}`}>
      {(fieldName || isOptional) && (
        <div className="m-fieldrow_head">
          {fieldName && <Label isOptional={isOptional}>{fieldName}</Label>}
          {toggleName && <Toggle name={toggleName} />}
        </div>
      )}
      {lead && (
        <div className="m-fieldrow_lead">
          <Text size="14" modifiers="gray">
            {lead}
          </Text>
        </div>
      )}
      <div className="m-fieldrow_body">{children}</div>
      {isShowError && (
        <div className="m-fieldrow_error">{errorMessage || errors[name!]}</div>
      )}
      {captionfee? (
        <div>
         <Text size="14" modifiers={['inline', 'red']}>{t("create.Servicefee")} </Text>
         <Text size="14" modifiers= {['inline', 'linethrough']}>2.5%</Text>
         <Text size="14" modifiers={['inline', 'red']}>&nbsp;&nbsp;0% </Text>
         </div>
      ) : (
<></>
      )

      }
      {((isCaptionForInput && children) || !isCaptionForInput) && caption && (
        <div className="m-fieldrow_caption">
          {typeof caption === 'string' ? (
            <Text size="14" modifiers="gray">
              {caption}
            </Text>
          ) : (
            caption.map((cap, idx) => (
              <Text key={idx} size="14" modifiers="gray">
                {cap}
              </Text>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default hot(Fieldrow);
