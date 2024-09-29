import { css } from '@emotion/react';
import img1 from '../../assets/images/seoulbig.png';
const style = {
  container: css({
    width: '5.75rem',
    height: '5.75rem',
    flexShrink: 0,
    borderRadius: '5.75rem',
    position: 'relative',
    overflow: 'hidden',
  }),
  img: css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover',
  }),
};
type CircleImgBoxProps = {
  subject: string;
};
const CircleImgBox = ({ subject }: CircleImgBoxProps) => {
  return (
    <div css={style.container}>
      <img css={style.img} src={img1} alt={`${subject}사진`} />
    </div>
  );
};
export default CircleImgBox;
