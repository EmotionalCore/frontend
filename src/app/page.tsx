//Dropdown 사용 예시

'use client';
import DropdownMenu, { MenuItemProps } from './components/_common/DropdownMenu';
import DeleteIcon from '../../public/image/delete-icon.svg';
import ShareIcon from '../../public/image/share-icon.svg';
import EditIcon from '../../public/image/edit-icon.svg';
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
    </main>
  );
}
