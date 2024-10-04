import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import data from '@/models/data.json';
import { getKeywordSearch } from '@/api/endpoints';
// import { SearchData } from '@/api/interfaces';
import { useNavigate, useLocation } from 'react-router-dom';

interface homeInputProps {
  placeHolder: string;
  condition: number;
  locationInfo: string;
}
const InputForSearch = ({
  placeHolder,
  condition,
  locationInfo,
}: homeInputProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => inputStyles(theme), [theme]);
  const [inputValue, setInputValue] = useState('');
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState(
    data.citiesForSearch[0].city
  );
  //handler
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      handleSearch();
    }
  };
  // URL에서 검색 파라미터 읽기
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');
    const city = searchParams.get('city');

    if (keyword) setInputValue(keyword);
    if (city) setSelectedCity(city);
  }, [location.search]);

  const handleSearch = () => {
    const combinedKeyword = `${selectedCity}${inputValue}`.trim();

    // URL 업데이트
    navigate(
      `/list?keyword=${encodeURIComponent(inputValue)}&city=${encodeURIComponent(selectedCity)}`,
      {
        state: {
          condition,
          locationInfo,
        },
      }
    );

    fetchKeywordSearch(combinedKeyword);
  };

  const fetchKeywordSearch = async (keyword: string) => {
    try {
      setLoading(true);
      const items = await getKeywordSearch({
        numOfRows: 10,
        pageNo: 1,
        listYN: 'Y',
        arrange: 'A',
        keyword: keyword,
        contentTypeId: condition,
      });
      console.log(items);
    } catch {
      setError('데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div css={styles.container}>
      <div css={styles.inputContainer}>
        <select
          css={styles.select}
          value={selectedCity}
          onChange={handleSelectChange}
        >
          {data.citiesForSearch.map((item) => {
            return <option key={item.id}>{item.city}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder={placeHolder}
          css={styles.input}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
const inputStyles = (theme: ThemeType) => ({
  container: css({
    color: '#fff',
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    // paddingBottom: '10.75rem',
  }),
  input: css({
    ...theme.input.homeInput,
    width: '99.546%',
  }),
  select: css({
    width: '14.85%',
    ...theme.select.homeSelect,
  }),
  inputContainer: css({
    display: 'flex',
    margin: 'auto',
    width: '100%',
    padding: '0 3rem 0 1.5rem',
    gap: '0.3rem',
  }),
});
export default InputForSearch;
