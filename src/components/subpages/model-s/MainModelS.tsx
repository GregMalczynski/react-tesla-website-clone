import styled from "styled-components";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import NavBar from "../../NavBar";

const MainModelS:React.FC = () => {

    const navPos: string = 'absolute';

    return(
        <ProductWrapper>
            <NavBar navPos={navPos}/>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </ProductWrapper>
    )
}

export default MainModelS;

const ProductWrapper = styled.div`
    width: 100vw;
`