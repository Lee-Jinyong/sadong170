import Header from 'components/Header/Header';
import '../styles/main.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
