import styled from "styled-components";

export const ContainerCard = styled.div`
    width: ${props => props.clicaCard.id === props.id ?'320px':'300px'};
    height: ${props => props.clicaCard.id === props.id ? '380px':'350px'};
    border-radius: 8px;
    border: ${props => props.clicaCard.id === props.id ? '2px solid red':'1px solid gray'};
    background-color: ${props => props.clicaCard.id === props.id ? 'lightgray':'white'};
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        color: darkgray;
    }

    p{
        font-size: 14px;
    }

    div{
        :first-child{
        display: flex;
        justify-content: center;
        width: 100%;
        border-radius: 8px 8px 0px 0px;  
        background-image: url("https://media-exp1.licdn.com/dms/image/D4D16AQFlDPfiWUxCew/profile-displaybackgroundimage-shrink_350_1400/0/1667779679596?e=1675296000&v=beta&t=fCN2lWmb8bm3MwaXuoxhv1lEJFrx5UhbB3Pl2OcGep0");
        background-position: top center;
        background-size: 100% auto;
        background-repeat: no-repeat;
        }

        :last-child{           
            text-align: center;
            justify-content: center;
            align-items: center;
            height: 60%;
            width: 96%;
        }
    }

    img{    
        margin-top: 8px;  
        height: 100px;
        border: 2px solid white;       
        border-radius: 50%;
    }
`