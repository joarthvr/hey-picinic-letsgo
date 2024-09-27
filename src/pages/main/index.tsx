import {css} from '@emotion/react';

export default function Main() {
  const mainStyles = {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 60px)',
    }),
  };
  return (
    <div>
      <div>
        찾고 싶은 행사, 숙소, 관광지를
        <br />
        검색해보세요.
      </div>
    </div>
  );
}
