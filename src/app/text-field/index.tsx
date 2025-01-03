import { styled } from "@/lib/styled";
import TextField from "@/src/components/text-field";
import { usePathname } from "expo-router";

export default () => {
    const path = usePathname();
    console.log("path", path);
    
    return(
        <WhapperPage>
            <WhapperComponent>
                <TitleComponent>Text field Filled</TitleComponent>
                <TextField margin={{t: 10}} color="tonal-background-offset" designer="top-on-press" label="Digite seu e-mail: *" variant="filled" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Text field Outlined</TitleComponent>
                <TextField margin={{t: 10}} color="tonal-background-offset" designer="top-on-press" label="Digite seu e-mail: *" variant="outlined" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Text field Standard</TitleComponent>
                <TextField margin={{t: 10}} color="tonal-background-offset" designer="top-on-press" label="Digite seu e-mail: *" variant="standard" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Text field and helperText</TitleComponent>
                <TextField error={true} helperText="Isso é um erro" margin={{t: 10}} color="tonal-background-offset" designer="top-on-press" label="Digite seu e-mail: *" variant="filled" />
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
    marginVertical: 15
});

const TitleComponent = styled("text")({
    fontSize: 14,
    fontWeight: 500
});
