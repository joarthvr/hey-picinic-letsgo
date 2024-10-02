import { css } from '@emotion/react';

interface SearchConditionBtnProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSelected: boolean;
}

const btnStyle = (isSelected: boolean) => css({
  margin: 0,
  whiteSpace: 'nowrap',
  width: 'auto',
  fontFamily: 'Pretendard',
  background: 'transparent',
  color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.41)',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  transition: 'color 0.3s ease, border-bottom 0.3s ease', // 테두리 전환 효과 추가
  borderBottom: isSelected ? '2px solid #FFFFFF' : '2px solid transparent', // 투명한 테두리로 시작
  padding: '5px 0', // 버튼 내부 여백 추가
  cursor: 'pointer', // 마우스 오버 시 커서 변경
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '&:focus': {
    outline: 'none', // 기본 포커스 스타일 제거
  },
  '&:active': {
    outline: 'none', // 클릭 시 포커스 스타일 제거
  },
});

export const SearchConditionBtn = ({
  title,
  onClick,
  isSelected,
}: SearchConditionBtnProps) => {
  return (
    <button css={btnStyle(isSelected)} onClick={onClick}>
      {title}
    </button>
  );
};

export default SearchConditionBtn;