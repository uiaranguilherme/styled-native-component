import TextField from "@/src/components/text-field";
import { Text, View } from "react-native"

export default () => {
    return(
        <View style={{backgroundColor: "white"}}>
            <Text>Text Field a</Text>
            <TextField margin={{t: 10}} color="tonal-background-offset" designer="top-on-press" label="Digite seu e-mail: *" variant="filled" />
        </View>
    );
}