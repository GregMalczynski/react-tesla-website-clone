import styled, { AnyStyledComponent } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bgImage = '../../../../public/images/models/model-x-interior-1.jfif'

const Section:React.FC = () => {

    return(
        <Wrapper backgroundImage={bgImage}>
            <FadeBox>
                    <DataWrapper>
                        <h3>Interior of The Future</h3>
                    </DataWrapper>
                </FadeBox>
        </Wrapper>
    )
}
  
export default Section;

const FadeBox = styled.div`
    width: 100vw;
    height: 200px;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(0,212,255,0) 100%);
    display: flex;
    justify-content: center;
`
const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 5vh;

    h3{
        font-size: 2rem;
        color: white;
    }
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