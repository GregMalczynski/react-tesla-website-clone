import styled, { AnyStyledComponent } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bgImage = '../../../../public/images/models/model-x-blue.jfif'

const Section:React.FC = () => {

    return(
        <Wrapper>
            <Content>
                <LeftSection>
                    <p>Utility</p>
                    <h2>Even More Capable</h2>
                        <TextWrapper>
                            <p>With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. 
                                Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, 
                                so you can bring your gear with you wherever you go.</p>
                        </TextWrapper>
                </LeftSection>
                <ButtonsWrapper>
                    <LeftButton>
                        Order Now
                    </LeftButton>
                    <RightButton>
                        View Inventory
                    </RightButton>
                </ButtonsWrapper>
            </Content>
            <Image backgroundImage={bgImage}>
                <ButtonsGroup>
                    <DataWrapper>
                        <SectionData>
                            <h3>92 ft³</h3>
                            <p>Up to 92 ft³ of storage</p>
                        </SectionData>
                        <SectionData>
                            <h3>5,000 lbs</h3>
                            <p>Tow up to 5,000 lbs</p>
                        </SectionData>
                        <SectionData>
                            <h3>1.99 s</h3>
                            <p>0-60 mph*</p>
                        </SectionData>
                    </DataWrapper>
                </ButtonsGroup>
            </Image>
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
    flex-direction: row;
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
    width: 80%;
    height: 100%;
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
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    h2{
        font-size: 2rem;
        color: black;
    }
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 20px;
`
const TextWrapper = styled.div`
    margin-top: 20px;
`