import Link from 'next/link';
import { memo } from 'react';
import { useIsMenuOpen } from 'store/isMenuOpen';

interface HeaderButtonProps {
  path: string;
  children: string;
}

function MenuButton({ path, children }: HeaderButtonProps) {
  const { close } = useIsMenuOpen(({ close }) => ({
    close,
  }));

  // 링크 이동 후 메뉴 닫는 함수
  const handleClick = () => {
    close();
  };

  return (
    <Link href={path} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default memo(MenuButton);
