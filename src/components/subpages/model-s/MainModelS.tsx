import styled from "styled-components";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
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
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </ProductWrapper>
    )
}

export default MainModelS;

const ProductWrapper = styled.div`
    width: 100vw;
`