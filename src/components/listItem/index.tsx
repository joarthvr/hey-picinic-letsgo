import { css, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { ThemeType } from '@/assets/styles/theme';
import noImage from '@/assets/images/no-image.png';
import ShowDetailBtn from '@/components/listItem/ShowDetailBtn';
import HeartBtn from '@/components/listItem/HeartBtn';
const ListItem = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => ListItemStyles(theme), [theme]);
  return (
    <div css={styles.container}>
      <figure>
        <img src={noImage} alt="itemImage" />
        <figcaption hidden>디테일 이미지</figcaption>
      </figure>
      <section css={styles.contentContainer}>
        <div css={styles.infoAndBtncontainer}>
          <div css={styles.infoContainer}>
            <h3 css={styles.h3}>서울뮤직페스티벌</h3>
            <p css={styles.adress}>경기도 평택시 포승읍 평택항만길75</p>
            <p css={styles.adress}>조천산조천산조천산</p>
          </div>
          <div css={styles.buttonContainer}>
            <HeartBtn />
            <ShowDetailBtn title="상세 정보" />
            <ShowDetailBtn title="상세 정보" />
          </div>
        </div>
        <p css={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          suscipit enim sapiente dolorum doloribus ea placeat, sed ad. Quam
          itaque adipisci aperiam voluptas ut explicabo iusto architecto at
          quibusdam incidunt?
        </p>
      </section>
    </div>
  );
};

const ListItemStyles = (theme: ThemeType) => ({
  container: css({
    display: 'flex',
    width: '100%',
    height: '11.0625rem',
    fontFamily: 'Pretendard',
    gap: '2.65rem',
    position: 'relative',
    // border: '1px solid black',
  }),
  contentContainer: css({
    margin: '1.31rem 0 1.31rem 0',
  }),
  buttonContainer: css({
    display: 'flex',
    gap: '0.5rem',
    float: 'right',
    alignItems: 'center',
    justifyContent: 'right',
  }),
  infoAndBtncontainer: css({
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.96rem',
  }),
  infoContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.56rem',
  }),
  h3: {
    ...theme.fonts.h3,
  },
  adress: {
    ...theme.fonts.gray,
  },
  description: {
    ...theme.fonts.description,
    color: theme.colors.TEXT_LIGHTGRAY,
    // whiteSpace:'nowrap',
  },
});
export default ListItem;
