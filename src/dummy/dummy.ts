// import { UserRankType } from 'components/molecules/userRank';
import img from 'assets/images/DESIGN.png';
import avatar from 'assets/images/DESIGN.png';
import { User } from 'components/organisms/productCard';
import { ViewTabItemProps } from 'components/molecules/viewTabItem';

export const users: User[] = [
  { src: avatar, alt: '', type: 'Owner', name: 'Elena' },
  { src: avatar, alt: '', type: 'Creator', name: 'Elena' },
];
// const userRankingGroup: UserRankType[] = [
//   {
//     rank: 1,
//     alt: 'abc',
//     name: 'Elana',
//     point: 2000,
//     image: img,
//   },
//   { rank: 2, alt: 'abc', name: 'Elana', point: 2000, image: img },
//   { rank: 3, alt: 'abc', name: 'Elana', point: 2000, image: img },
// ];
// export const dummyUserRankingList = Array(5)
//   .fill(userRankingGroup)
//   .map((group, gIdx) => group.map((u, uIdx) => ({ ...u, rank: gIdx * 3 + (uIdx + 1) })));

type dummyInfoTab = Omit<ViewTabItemProps, 'lead'> & {
  userType?: string;
  saleprice?: string;
  date?: string;
  bid?: string;
};

export const viewInfoTab: { [key: string]: dummyInfoTab[] } = {
  Info: [
    {
      name: 'Elana',
      image: img,
      userType: 'Owner',
    },
  ],
  Comment: [
    {
      // by: 'Elana',
      image: img,
      saleprice: '0.35',
    }
  ],
  History: [
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '46 minutes ago',
    },
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '18 hours ago',
      hasTick: true,
    },
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '21 hours ago',
    },
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '1 days ago',
      hasTick: true,
    },
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '1 days ago',
    },
    {
      by: 'Elana',
      image: img,
      saleprice: '0.25',
      date: '1 days ago',
    },
  ],
};
