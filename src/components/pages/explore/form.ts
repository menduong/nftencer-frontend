import { Asserts, boolean, object, string } from 'yup';
import iconfire from 'assets/images/icon/icon-firetab.svg'
export const exploreSchema = object({
  unit: string(),
  search: string(),
  productCategory: string(),
  productSort: string(),
  verify: boolean(),
});
export const MyItemCategories = ['On sale', 'Bought Items', 'Sold Items'];
export const ProductCategories = [
  {
    tab:'Trend',
    icon: 'firetab'
  }, 
  {
    tab:'Best',
    icon:'medaltab'
  }, 
  {
    tab:'New',
    icon:'newtab'
  }, 

 
];
export const ProductCategoriesMobile = ['Funny', 'Cute','Food','Dance/Sing'];
export const ExtraProductCategories = [ 'Dance/Sing', 'Beauty', 'Sports', 'Trick/Magic', 'Education', 'Activity', 'Animation/Cartoon', 'Gaming','Health/Fitness','Travel','Science','Sexy/Face','Others'];

type SortAndFilter = {
  filter?: 'created-date' | 'instant-sale-price';
  sort?: 'asc' | 'desc';
};

export const SortDefaultValue = 'Recently added';

export const Sort: {
  [key: string]: SortAndFilter;
} = {
  'Recently added': { filter: 'created-date', sort: 'desc' },
  Cheapest: { filter: 'instant-sale-price', sort: 'asc' },
  'Highest price': { filter: 'instant-sale-price', sort: 'desc' },
} as const;

export type ExploreSchema = Asserts<typeof exploreSchema>;
