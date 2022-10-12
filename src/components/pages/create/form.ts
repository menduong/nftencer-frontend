import { Asserts, mixed, number, array, object, string } from 'yup';
import { ExtraProductCategories, ProductCategories } from 'components/pages/explore/form';
import { useTranslation } from "react-i18next";

export const createSchema = object({
  file: mixed().required('파일 크기가 100Mb를 넘기 때문에 업로드 불가 합니다.'),
  instantsaleprice: number().typeError('Please input sale price.').required('Please input sale price.'),
  unit: number().required(),
  name: string().required('Please enter product name.'),
  description: string(),
  address: string(),
  categories: array(
    object().shape({
      name: string().required(),
      id: number().required(),
    })
  ).min(1, 'Please select at least 1 category.'),
});
export const createSchemaData = object({
  instantsaleprice: number().typeError('Please input sale price.').required('Please input sale price.'),
  unit: number().required(),
  address: string(),
});

export type CreateForm = Asserts<typeof createSchema>;
export type CreateFormData = Asserts<typeof createSchemaData>;

export const Unit = ['BNB', 'BUSD', 'CONUT'];
export const Categories = [...ExtraProductCategories].map((category, idx) => {
  return { id: idx, name: category };
});

export const initialValue: CreateForm = {
  name: '',
  file: undefined,
  description: '',
  address:'',
  instantsaleprice: 0,
  unit: 0,
  categories: [],
};
export const initialValueData: CreateFormData = {
  file: undefined,
  address:'',
  instantsaleprice: 0,
  unit: 0,
};
