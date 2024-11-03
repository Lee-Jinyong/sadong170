import Link from 'next/link';
import { memo } from 'react';
import { useIsMenuOpen } from 'store/isMenuOpen';

interface NavigationButtonProps {
  isLinkBtn: boolean;
  path: string;
  imgUrl: string;
  imgAlt: string;
}

function NavigationButton({ isLinkBtn, path, imgUrl, imgAlt }: NavigationButtonProps) {
  // 메뉴 창 관리하는 상태
  const { isMenuOpen, close, change } = useIsMenuOpen(({ isMenuOpen, close, change }) => ({
    isMenuOpen,
    close,
    change,
  }));

  const handleClick = (type: string) => {
    if (type === 'Search') {
      console.log('Search');
    } else if (type === 'Menu') {
      change();
    } else {
      // 링크 이동 후 메뉴 닫기
      close();
    }
  };

  return (
    <>
      {isLinkBtn ? (
        // 링크 이동하는 버튼 렌더링
        <Link href={path} onClick={() => handleClick(path)}>
          <img src={imgUrl} alt={imgAlt} />
        </Link>
      ) : (
        // 기능 수행하는 버튼 렌더링
        <button type="button" onClick={() => handleClick(path)}>
          <img src={imgUrl} alt={imgAlt} />
        </button>
      )}
    </>
  );
}

export default memo(NavigationButton);
