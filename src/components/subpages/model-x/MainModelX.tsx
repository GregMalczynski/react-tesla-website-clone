import styled from "styled-components";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionBlueX from "./SectionBlueX";
import NavBar from "../../NavBar";

const MainModelX:React.FC = () => {

    const navPos: string = 'absolute';

    return(
        <ProductWrapper>
            <NavBar navPos={navPos}/>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionBlueX />
            <SectionSix />
            <SectionSeven />
        </ProductWrapper>
    )
}

export default MainModelX;

const ProductWrapper = styled.div`
    width: 100vw;
`