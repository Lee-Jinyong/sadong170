import { memo } from 'react';
import NavigationButton from './NavigationButton/NavigationButton';
import S from './style.module.scss';

function NavigationBar() {
  return (
    <nav className={S.component}>
      <NavigationButton
        isLinkBtn={true}
        path={'/Account'}
        imgUrl={'/IconAccount.svg'}
        imgAlt={'내 계정'}
      ></NavigationButton>
      <NavigationButton
        isLinkBtn={false}
        path={'Search'}
        imgUrl={'/IconSearch.svg'}
        imgAlt={'검색하기'}
      ></NavigationButton>
      <NavigationButton
        isLinkBtn={true}
        path={'/'}
        imgUrl={'/IconHome.svg'}
        imgAlt={'메인페이지'}
      ></NavigationButton>
      <NavigationButton
        isLinkBtn={true}
        path={'/Cart'}
        imgUrl={'/IconCart.svg'}
        imgAlt={'장바구니'}
      ></NavigationButton>
      <NavigationButton
        isLinkBtn={false}
        path={'Menu'}
        imgUrl={'/IconMenu.svg'}
        imgAlt={'메뉴'}
      ></NavigationButton>
    </nav>
  );
}

export default memo(NavigationBar);
