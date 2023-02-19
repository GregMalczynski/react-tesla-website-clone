import styled, { AnyStyledComponent } from "styled-components";

const backgroundImage1 = 'model-s-start.jfif'


const Section:React.FC = () => {

    return(
        <Wrapper>
           <Content>
                <BoxImg>
                    <img src="../../../../public/images/models/model-x-small-4.jfif" />
                </BoxImg>
                <BoxText>
                    <h1>Stay Connected</h1>
                    <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </BoxText>
                <BoxText>
                    <h1>Room for Everything</h1>
                    <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                </BoxText>
                <BoxImg>
                    <img src="../../../../public/images/models/model-x-small-5.jfif" />
                </BoxImg>
           </Content>
        </Wrapper>
    )
}
  
export default Section;

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    h1{
        font-size: 1.4rem;
        color: white;
    }
    p{
        font-size: 1rem;
        font-weight: 400;
        color: white;
        opacity: 0.7;
    }
`
const Content = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`
const BoxImg = styled.div`
    display: flex;
    img{
        width: 550px;
    }
`
const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    text-align: left;
    justify-content: center;
`