import styled, { AnyStyledComponent } from "styled-components";

const bgImage = '../../../../public/images/models/model-x-white-blackbg-1.jfif'

const Section:React.FC = () => {

    return(
        <Wrapper>
            <Image backgroundImage={bgImage}>
            </Image>
            <Content>
                <LeftSection>
                    <p>Exterior</p>
                    <h2>Designed for Efficiency</h2>
                        <ButtonsWrapper>
                            <LeftButton>
                                Order Now
                            </LeftButton>
                            <RightButton>
                                View Inventory
                            </RightButton>
                        </ButtonsWrapper>
                </LeftSection>
                <RightSection>
                    <p>
                    With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. 
                    Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.
                    </p>
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
    background-color: black;
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
        color: black
    }
`
const RightButton = styled(LeftButton)`
    background-color: white;
    font-weight: 600;
    color: black;
    &:hover {
        background-color: black;
        color: white
    }
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
        color: white;
    }
    p{
        color: white;
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

    p{
        color: white;
    }

`