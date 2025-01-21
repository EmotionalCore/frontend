'use client';
import DropdownMenu, { MenuItemProps } from './components/_common/DropdownMenu';
import DeleteIcon from '../../public/image/delete-icon.svg';
import ShareIcon from '../../public/image/share-icon.svg';
import EditIcon from '../../public/image/edit-icon.svg';
import Buttons from './components/_common/Buttons';
import Avatar from './components/_common/Avatar';

const items: MenuItemProps[] = [
  {
    id: '1',
    label: '수정하기',
    icon: ShareIcon,
    alt: 'edit',
    color: 'default',
    onClick: () => {
      console.log('수정하기 클릭됨');
    },
  },
  {
    id: '2',
    label: '공유하기',
    icon: EditIcon,
    alt: 'share',
    color: 'default',
    onClick: () => {
      console.log('공유하기 클릭됨');
    },
  },
  {
    id: '3',
    label: '삭제하기',
    icon: DeleteIcon,
    alt: 'delete',
    color: 'red',
    onClick: () => {
      console.log('삭제하기 클릭됨');
    },
  },
];

export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center'>
        <DropdownMenu items={items} size='default' variant='default' />
      </div>
      <Buttons intent='white' size='xxs' outline={false}>
        태그 연습
      </Buttons>
      <br />
      <Avatar size='lg' src='https://media.bunjang.co.kr/product/288379457_1_1725770265_w360.jpg' alt='아바타'></Avatar>
    </main>
  );
}
