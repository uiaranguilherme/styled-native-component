import { styled } from "@/lib/styled";
import Switch from "@/src/components/switch";

export default () => {    
    return(
        <WhapperPage>
            <WhapperComponent>
                <TitleComponent>Switch Small</TitleComponent>
                <Switch handleChange={() => {}} size="small" value={true} label="Switch Component" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Switch medium</TitleComponent>
                <Switch handleChange={() => {}} size="medium" value={true} label="Switch Component" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Switch large</TitleComponent>
                <Switch handleChange={() => {}} size="large" value={true} label="Switch Component" />
            </WhapperComponent>
            
            <WhapperComponent>
                <TitleComponent>Switch desabled</TitleComponent>
                <Switch handleChange={() => {}} disabled size="small" value={true} label="Switch Component" />
            </WhapperComponent>

            <WhapperComponent>
                <TitleComponent>Switch direction row-reverse...</TitleComponent>
                <Switch handleChange={() => {}} direction="row-reverse" size="small" value={true} label="Switch Component" />
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
