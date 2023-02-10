import styled from "styled-components"
import Section from "./Section";
import { homepageData } from "../app-data/homepage-data";
import NavBar from "../NavBar";

const Home:React.FC = () => {

    const navPos: string = 'fixed';

    return(
        <div>
            <NavBar navPos={navPos} />
            <Container>
                {homepageData.map((data: any) => 
                    <div key={data.id}>
                        <Section  
                            id={data.id}
                            title={data.title}
                            subtitle={data.subtitle}
                            bgImage={data.bgImage}
                            leftButton={data.leftButton}
                            rightButton={data?.rightButton}
                        />
                    </div>)}
            </Container>
        </div>
    )
  }

export default Home;

const Container = styled.div`
    height: 100vh;
`