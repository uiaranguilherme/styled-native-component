import { styled } from "@/lib/styled";
import Button from "@/src/components/button";
import AntDesign from '@expo/vector-icons/AntDesign';

export default () => {    
    return(
        <WhapperPage>
            <WhapperComponent>
                <TitleComponent>Button Contained</TitleComponent>
                <Button variant="container" >Clique me Contained!!</Button>
            </WhapperComponent>
            <WhapperComponent>
                <TitleComponent>Button Outlined</TitleComponent>
                <Button variant="outlined" >Clique me Outlined!!</Button>
            </WhapperComponent>
            <WhapperComponent>
                <TitleComponent>Button Text</TitleComponent>
                <Button variant="text" >Clique me Text!!</Button>
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Button Contained End Icon</TitleComponent>
                <Button variant="container" rightIcon={<AntDesign name="forward" size={24} color="white" />}>Clique me Text!!</Button>
            </WhapperComponent>
            <WhapperComponent>
                <TitleComponent>Button Contained End Icon</TitleComponent>
                <Button variant="container" leftIcon={<AntDesign name="forward" size={24} color="white" />}>Clique me Text!!</Button>
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Button Contained Disabled</TitleComponent>
                <Button variant="container">Clique me Text!!!</Button>
            </WhapperComponent>
        </WhapperPage>
    );
};

const WhapperPage = styled("view")({
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: "100%"
});

const WhapperComponent = styled("view")({
    display: "flex",
    flexDirection: "column",
    marginVertical: 15,
    flexWrap: "wrap"
});

const TitleComponent = styled("text")({
    fontSize: 14,
    fontWeight: 500
});
