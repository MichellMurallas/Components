import styled from 'styled-components'

const Colors = () => {
  const Content = styled.div
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  


  h2{
    font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-top: 40px;
margin-bottom: 20px;

letter-spacing: -0.6px;
${'' /* margin-bottom: 15px; */}

color: #000000;
  }


  const Paletas = styled.div
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* margin-bottom: 100px; */}


  const Paleta = styled.div
  display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 2px;
cursor: pointer;
transition: all 0.1s linear;

 & :hover {
    border: 3px solid #000000;
    transform: scale(1.25);

 }

  const Base1 = styled(Paleta)
    background-color:#DACD4A;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;

  const Base2 = styled(Paleta)
    background-color:#293E7A;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;


`

  return (
    <Content>
      <Paletas>

        <Paleta>
          <Base1 />
          <Base2 />

        </Paleta>
      </Paletas>
    </Content>
  )
}

export { Colors }
