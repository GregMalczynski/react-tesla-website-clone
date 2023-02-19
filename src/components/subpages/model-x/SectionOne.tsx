import styled, { AnyStyledComponent } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bgImage = '../../../../public/images/models/model-x-start.jfif'

const Section:React.FC = () => {

    return(
        <Wrapper backgroundImage={bgImage}>
            <TitleText>
                <h1>Model S</h1>
                <h2>Plaid</h2>
            </TitleText>
            <FadeBox>
                <ButtonsGroup>
                    <DataWrapper>
                        <SectionData>
                            <h3>396 mi</h3>
                            <p>Range (EPA est.)</p>
                        </SectionData>
                        <SectionData>
                            <h3>1.99 s</h3>
                            <p>0-60 mph*</p>
                        </SectionData>
                        <SectionData>
                            <h3>200 mph</h3>
                            <p>Top Speed†</p>
                        </SectionData>
                        <SectionData>
                            <h3>1,020 hp</h3>
                            <p>Peak Power</p>
                        </SectionData>
                    </DataWrapper>
                    <Buttons>
                        <LeftButton>
                            Order Now
                        </LeftButton>
                    </Buttons>
                </ButtonsGroup>
                </FadeBox>
        </Wrapper>
    )
}
  
export default Section;

const FadeBox = styled.div`
    width: 100vw;
    height: 200px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(0,212,255,0) 100%);
    display: flex;
    justify-content: center;
`

const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 60px;

    h3{
        font-size: 2rem;
        color: white;
    }
    p{
        color: white;
    }
`
const SectionData = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props: AnyStyledComponent) => `url("/images/${props.backgroundImage}")`};
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 1.2rem;
        font-weight: 400;
    }
`
const TitleText = styled.div`
    padding-top: 18vh;
    text-align: center;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 12vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    color: white;
    width: 250px;
    height: 35px;
    border-radius: 3px;
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
        background-color: white;
        color: black;
    }
`
const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`
const Arrow = styled(ExpandMoreIcon)`
    transform: scale(1.5)
    display: flex;
    margin-bottom: 20px;
    animation: arrowAnimate infinite 1.5s;
`
const ButtonsGroup = styled.div`
    display: flex;
    margin-top: 8vh;
    gap: 60px;
`