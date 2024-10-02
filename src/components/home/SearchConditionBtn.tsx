import { css } from '@emotion/react';
interface SearchConditionBtnProps {
  title: string;
  onClick: () => void;
}
const btnStyle = css({
  margin: 0,
  whiteSpace: 'nowrap',
  width: 'auto',
  fontFamily: 'Pretendard',
  background: 'transparent',
  color: 'rgba(255, 255, 255, 0.41)',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.7)',  // 호버 시 색상 변경
  },
  '&:focus': {
    outline: 'none',  // 포커스 아웃라인 제거
    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.5)',  // 포커스 시 그림자 효과
  },
});
const SearchConditionBtn = ({ title, onClick }: SearchConditionBtnProps) => {
  return <button css={btnStyle} onClick={()=>onClick}>{title}</button>;
};
export default SearchConditionBtn;
