import React from 'react';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 navigate 가져오기

const DiaryBackground = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

const DiaryDate = styled.div`
    display: flex;
    align-items: center;
    color: #666;
    margin-left: 20px;
`;

const FeelIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color || "#ff3b30"};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
`;

const FeelText = styled.p`
    font-size: 1rem;
    color: #333;
`;

const FeelItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.background || "#f5f5f5"};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    margin-bottom: 20px;
`;

const FeelStatusContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin-bottom: 2rem;
    margin-right: 40px;
    margin-top: 20px;
`;

const FeelTitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

// FilterButton 스타일 정의
const FilterButton = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    font-size: 0.9rem;
    color: #999;
    cursor: pointer;
    `;

const FeelStatus = ({ onChartClick }) => (
    <FeelStatusContainer>
        <FeelTitle>최근 일기</FeelTitle>
        <FeelItem background="#ffe4e1">
            <FeelIcon color="#ff3b30">
                <SentimentVeryDissatisfiedIcon style={{ color: "#fff" }} />
            </FeelIcon>
            <FeelText>반재형 - 나는 방구</FeelText>
            <DiaryDate>
                <ScheduleIcon style={{ marginRight: '0.5rem' }} />
                2024-10-08
            </DiaryDate>
            <FilterButton onClick={onChartClick}>차트보기</FilterButton> {/* props로 전달된 함수 사용 */}
        </FeelItem>
        <FeelItem background="#fff3cd">
            <FeelIcon color="#ffc107">
                <SentimentVeryDissatisfiedIcon style={{ color: "#fff" }} />
            </FeelIcon>
            <FeelText>반재형 - 나는 방구</FeelText>
            <DiaryDate>
                <ScheduleIcon style={{ marginRight: '0.5rem' }} />
                2024-10-08
            </DiaryDate>
            <FilterButton onClick={onChartClick}>차트보기</FilterButton> {/* props로 전달된 함수 사용 */}
        </FeelItem>
    </FeelStatusContainer>
);

const CounselorDiaryCheck = () => {
    const navigate = useNavigate();

    const Chart = () => {
        navigate('/counselor-chart'); 
    };

    return (
        <DiaryBackground>
            <FeelStatus onChartClick={Chart} /> {/* Chart 함수를 props로 전달 */}
        </DiaryBackground>
    );
};

export default CounselorDiaryCheck;
