import { useState, useEffect } from 'react';
import styled, { AnyStyledComponent } from "styled-components";

const bgImage = '../../../../public/images/models/model-x-motor-1.jfif';
const bgImageNext = '../../../../public/images/models/model-x-motor-2.jfif'

interface OpacityLeft{
    opacityLeft: any,
}
interface OpacityRight{
    opacityRight: any,
}

const Section:React.FC = () => {

    const [ opacityLeft, setOpacityLeft ] = useState<any>(true);
    const [ opacityRight, setOpacityRight ] = useState<any>(false)
    
    useEffect(() => {
        const opacityInterval = setInterval(() => {
            setOpacityLeft(!opacityLeft)
            setOpacityRight(!opacityRight)
        }, 5000)
        return () => clearInterval(opacityInterval)
    })

    console.log(opacityLeft, opacityRight)

    return(
        <Wrapper>
           <Content>
                <LeftTopSection>
                    <h2>Electric Powertrain</h2>
                    Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. 
                    New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
                </LeftTopSection>
            </Content>
            <Image backgroundImage={bgImage} bgImageNext={bgImageNext} opacityLeft={opacityLeft}>
            </Image>
            <Content>
                <LeftSection opacityLeft={opacityLeft}>
                    <h2>Model S</h2>
                    <p>Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our service</p>
                    <DataWrapper>
                        <SectionData>
                            <h3>3.1 s</h3>
                            <p>0-60 mph</p>
                        </SectionData>
                        <SectionData>
                            <h3>405 mi</h3>
                            <p>Range (EPA Est.)</p>
                        </SectionData>
                        <SectionData>
                            <h3>670 hp</h3>
                            <p>Peak Power</p>
                        </SectionData>
                    </DataWrapper>
                </LeftSection>
                <RightSection opacityRight={opacityRight}>
                    <h2>Model S Plaid</h2>
                    <p>Maintain 1000+ horsepower all the way to 200 mph with Tri-Motor All Wheel Drive, featuring torque 
                        vectoring and three independend carbon sleeved rotors.
                    </p>
                    <DataWrapper>
                        <SectionData>
                            <h3>1.99 s</h3>
                            <p>0-60 mph</p>
                        </SectionData>
                        <SectionData>
                            <h3>396 mi</h3>
                            <p>Range (EPA Est.)</p>
                        </SectionData>
                        <SectionData>
                            <h3>1,020 hp</h3>
                            <p>Peak Power</p>
                        </SectionData>
                    </DataWrapper>
                </RightSection>
            </Content>  
            * With rollout subtracted    
        </Wrapper>
    )
}
  
export default Section;

const DataWrapper = styled.div`
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 40px;

    h3{
        font-size: 2rem;
        color: black;
    }
    p{
        color: black;
    }
`
const SectionData = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EFEFEF;
    align-items: center;
    width: 100%;
    height: 120vh;
`
const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 75vh;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props: AnyStyledComponent) => `url("/images/${props.opacityLeft ? props.backgroundImage : props.bgImageNext}")`};
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 1.2rem;
        font-weight: 400;
    }
`
const Content = styled.div`
    width: 1200px;
    height: 40vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const LeftTopSection = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    text-align: left;
`
const LeftSection = styled.div<OpacityLeft>`
    width: 600px;
    display: flex;
    flex-direction: column;
    opacity: ${(props: any) => `${props.opacityLeft ? `1`: `0.5`}`};
    h2{
        font-size: 2rem;
        color: black;
    }
`
const RightSection = styled.div<OpacityRight>`
    width: 600px;
    padding: 20px;
    opacity: ${(props: any) => `${props.opacityRight ? `1`: `0.5`}`};
    h2{
        font-size: 1.8rem;
        color: black;
    }
`