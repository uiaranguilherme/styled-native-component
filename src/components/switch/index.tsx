import { useRef, useState } from "react";
import { SwitchProps } from "..";
import { ComponentSwitch, ContainerSwitch, DotSwitch, LabelSwitch, WhapperSwitch } from "./styles";
import { Animated } from "react-native";
import { useCallFunction } from "@/src/hooks";

const DURATION_ANIMATE = 300;
const MAX_TRANSLATE = 125;

export default ({ size, value, label, disabled, direction, handleChange, ...props }: SwitchProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(value);
    const [translateX, setTranslateX] = useState(0);
    const dotAnimation = useRef(new Animated.Value(value ? MAX_TRANSLATE : 0)).current;
    
    const onPress = (value: boolean) => {
        if(value){
            setIsChecked(false);
            Animated.timing(dotAnimation, {
                toValue: 125,
                duration: DURATION_ANIMATE,
                useNativeDriver: true
            }).start();

        }else {
            setIsChecked(true);
            Animated.timing(dotAnimation, {
                toValue: 0,
                duration: DURATION_ANIMATE,
                useNativeDriver: true
            }).start();

        }

        dotAnimation.addListener(({ value }) => setTranslateX(value));
    }

    const handleOnPress = handleChange ? useCallFunction(onPress, handleChange) : onPress;

    return(
        <WhapperSwitch direction={direction} {...props}>
            <ComponentSwitch>
                <ContainerSwitch disabled={disabled} size={size} onPress={() => handleOnPress(isChecked)}>
                    <DotSwitch disabled={disabled} size={size} translateX={translateX}/>
                </ContainerSwitch>
            </ComponentSwitch>
            <LabelSwitch>{label ?? label}</LabelSwitch>
        </WhapperSwitch>
    );
}