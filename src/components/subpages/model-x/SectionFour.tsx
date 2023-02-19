import styled, { AnyStyledComponent } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bgImage = '../../../../public/images/models/model-x-gray.jfif'

const Section:React.FC = () => {

    return(
        <Wrapper>
            <Image backgroundImage={bgImage}>
                <ButtonsGroup>
                    <DataWrapper>
                        <SectionData>
                            <h3>1,020 hp</h3>
                            <p>Peak Power</p>
                        </SectionData>
                        <SectionData>
                            <h3>9.23 s</h3>
                            <p>@155 mph 1/4 mile</p>
                        </SectionData>
                        <SectionData>
                            <h3>1.99 s</h3>
                            <p>0-60 mph*</p>
                        </SectionData>
                    </DataWrapper>
                </ButtonsGroup>
            </Image>
            <Content>
                <LeftSection>
                    <p>Plaid</p>
                    <h2>Beyond Ludicrous</h2>
                        <ButtonsWrapper>
                            <LeftButton>
                                Order Now
                            </LeftButton>
                            <RightButton>
                                Order Now
                            </RightButton>
                        </ButtonsWrapper>
                </LeftSection>
                <RightSection>
                    Model S Plaid has the quickest acceleration of any vehicle in production. 
                    Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. 
                    <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S or <a href="#">schedule a demo drive</a> today.
                </RightSection>
            </Content>
        
        </Wrapper>
    )
}
  
export default Section;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 200px;

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
`
const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75vh;
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
const LeftButton = styled.div`
    color: black;
    width: 250px;
    height: 35px;
    border-radius: 3px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;
    &:hover {
        background-color: black;
        color: white
    }
`
const RightButton = styled(LeftButton)`
    background-color: white;
    font-weight: 600;
    color: black;
`
const ButtonsGroup = styled.div`
    display: flex;
    height: 100%;
    align-items: end;
    margin-bottom: 8vh;
    bottom: 20px;
`
const Content = styled.div`
    width: 1200px;
    height: 25vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const LeftSection = styled.div`
    width: 480px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 2rem;
        color: black;
    }
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;
`
const RightSection = styled.div`
    width: 700px;
    padding: 20px;

    a{
        text-decoration: underline;
    }

`