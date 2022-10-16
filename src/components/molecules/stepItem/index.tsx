import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Icon } from 'components/atoms/icon';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Spinner } from 'components/atoms/spinner';
import Grid from '@material-ui/core/Grid';

export type StepIcon = 'tick-step' | 'tick-success' | 'try-again';

interface Props {
  iconName: StepIcon | 'loading';
  title: string;
  description?: string;
  handleClick?: () => void;
}

export const StepItem: React.FC<Props> = props => {
  console.log("iconName",props.iconName)
  return (
  //   <Grid
  //   container
  //   spacing={0}
  // >
  //   <Grid justify="center" item xs={12} spacing={0}>
  //   </Grid>
   
    <li className={mapModifiers('m-stepitem', props.iconName)}>
      <span
        className="m-stepitem_process"
        onClick={() => props.iconName === 'try-again' && props.handleClick && props.handleClick()}
      >
        {props.iconName === 'loading' ? <Spinner /> : <Icon iconName={props.iconName} />}
      </span>
      <div className={`m-stepitem_info ${props.iconName}`}>
        <Heading type="h4" modifiers="nomargin">
          {props.title}
        </Heading>
        <Text size="14" modifiers={['gray']}>
          {props.description}
        </Text>
      </div>
    </li>
    // </Grid>
  );
};

export default hot(StepItem);
