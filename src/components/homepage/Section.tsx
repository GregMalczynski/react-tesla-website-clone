import styled, { AnyStyledComponent } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface DataTypes{
    id: number,
    title: string,
    subtitle: string,
    bgImage: string,
    leftButton: string,
    rightButton: string | null
}

const Section:React.FC <DataTypes> = ({id, title, subtitle, bgImage, leftButton, rightButton}) => {

    return(
        <Wrapper backgroundImage={bgImage}>
            <TitleText>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </TitleText>
                <ButtonsGroup>
                    <Buttons>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                            {rightButton ? <RightButton>{rightButton}</RightButton> : null}        
                    </Buttons>
                    {id === 1 ? <ArrowWrapper><Arrow /></ArrowWrapper> : null}
                </ButtonsGroup>
        </Wrapper>
    )
}
  
export default Section;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
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
    margin-bottom: 8vh;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgb(51, 51, 51);
    color: white;
    width: 250px;
    height: 35px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    opacity: 0.85;
    cursor: pointer;
    font-weight: 500;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    font-weight: 600;
    color: black;
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
`