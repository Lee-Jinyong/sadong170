'use client';

import { memo, useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { throttle } from 'utils/throttle';
import { AnimatePresence, motion } from 'framer-motion';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import S from './style.module.scss';
import Link from 'next/link';
import { useIsMenuOpen } from 'store/isMenuOpen';

// 메뉴 창 애니메이션 변수
const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 50,
    },
  },
};

function Header() {
  const [resolution, setResolution] = useState<number | null>(null);

  // 메뉴 창 관리하는 상태
  const { isMenuOpen } = useIsMenuOpen(({ isMenuOpen }) => ({
    isMenuOpen,
  }));

  // 해상도 변경을 감지하는 함수(throttle 200ms 적용)
  const handleResolutionResize = throttle(() => {
    setResolution(window.innerWidth);
  }, 200);

  useEffect(() => {
    if (resolution === null) {
      setResolution(window.innerWidth); // 마운트 시 해상도 초기화
    }

    // 해상도 변경 함수의 이벤트 리스너
    window.addEventListener('resize', handleResolutionResize);
    return () => {
      window.removeEventListener('resize', handleResolutionResize);
    };
  }, [handleResolutionResize]);

  return (
    <>
      {resolution === null ? (
        <p>Loading...</p> // 로딩 상태 처리
      ) : resolution <= 800 ? (
        <>
          <header className={S.component}>
            <h1 className="sr-only">사동 170</h1>
            <Link href="/">
              <img src="/Logo.png" alt="로고" />
            </Link>
          </header>
          <NavigationBar />
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className={S.menu}
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                aria-hidden={!isMenuOpen} // ARIA 접근 제한
              >
                <ul>
                  <li>
                    <MenuButton path="/">홈</MenuButton>
                  </li>
                  <li>
                    <MenuButton path="/products/beef">소고기</MenuButton>
                  </li>
                  <li>
                    <MenuButton path="/products/pork">돼지고기</MenuButton>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </>
      ) : (
        <header className={S.component}>
          <h1 className="sr-only">사동 170</h1>
          <Link href="/">
            <img src="/Logo.png" alt="로고" />
          </Link>
          <nav>
            <ul>
              <li>
                <MenuButton path="/">홈</MenuButton>
              </li>
              <li>
                <MenuButton path="/products/beef">소고기</MenuButton>
              </li>
              <li>
                <MenuButton path="/products/pork">돼지고기</MenuButton>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default memo(Header);
