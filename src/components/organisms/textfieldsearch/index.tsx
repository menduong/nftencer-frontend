import React, { useMemo} from 'react';
import { hot } from 'react-hot-loader/root';
import { navigate } from 'gatsby-link';
import { RouteComponentProps } from '@reach/router';
import {
  ExploreSchema,
  exploreSchema,
  SortDefaultValue,
} from 'components/pages/explore/form';
import { TextFieldFormik } from 'components/atoms/textfield';
import { Form, Formik } from 'formik';
type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?: string;
}


export const Textfieldsearch: React.FC<RouteComponentProps> = props => {
  const params = new URLSearchParams(props.location?.search);
  const initialValue: ExploreSchema = useMemo(
    () => ({
      productCategory: params.get('category') || 'All',
      productSort: params.get('sort') || SortDefaultValue,
      verify: false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (

    <Formik initialValues={initialValue} validationSchema={exploreSchema} onSubmit={values => {
      navigate(`/search?name=${values.search}`);
    }
    }>
      {({ values }) => {
        return (
          <Form>
            <TextFieldFormik
              modifiers="search"
              placeholder="Name"
              type="search"
              name="search"
            />
          </Form>
        );
      }}
    </Formik>

  )
};

export default hot(Textfieldsearch);
