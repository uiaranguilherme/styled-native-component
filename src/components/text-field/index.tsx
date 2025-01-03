import { WhapperTextField, ContainerTextField, LabelTextField, LabelHelperText, TextFieldIcon, ComponentTextField } from "./styles";
import { Animated, Easing, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useCallFunction } from "@/src/hooks";
import { TextFieldProps } from "../index.d";

const duration = 40;
const position = {
    initial: 8,
    final: 0
};
const font = {
    initial: 15,
    final: 13
};

export default ({ designer, variant, label, helperText, error, leftIcon, rightIcon, color, fullWidth, margin, width, ...props } : TextFieldProps) => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const [top, setTop] = useState<number>(position.initial);
    const [size, setSize] = useState<number>(font.initial);
    const [value, setValue] = useState(props.value);
    const input = useRef<TextInput>(null);

    const topPosition = useRef(new Animated.Value(position.initial)).current;
    const fontSize = useRef(new Animated.Value(font.initial)).current;

    const animateFocus = () => {
        Animated.timing(topPosition, {
            duration,
            toValue: position.final,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start();

        Animated.timing(fontSize, {
            duration,
            toValue: font.final,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start();
    }

    const animateBlur = () => {
        Animated.timing(topPosition, {
            duration,
            toValue: position.initial,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start();

        Animated.timing(fontSize, {
            duration,
            toValue: font.initial,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start();
    }

    const onFocus = () => {
        setFocus(true);
        animateFocus();
        input.current?.focus();
    }

    const onBlur = () => {
        setFocus(false);
        if(value === undefined || value === "") animateBlur();
    }

    const changeText = (value: string) => setValue(value);

    const handleFocusInput = typeof props.onFocus === "function" ? useCallFunction(onFocus, props.onFocus) : onFocus;
    
    const handleBlurInput =  typeof props.onBlur === "function" ? useCallFunction(onBlur, props.onBlur) : onBlur;

    const handleChangeText = typeof props.onChangeText === "function" ? useCallFunction(changeText, props.onChangeText) : changeText;

    useEffect(() => {
        const topListenerId = topPosition.addListener(({ value }) => setTop(value));
        const fontSizeListenerId = fontSize.addListener(({ value }) => setSize(value));

        return () => {
            topPosition.removeListener(topListenerId);
            fontSize.removeListener(fontSizeListenerId);
        }
    }, []);

    return(
        <ComponentTextField>
            <WhapperTextField 
                focus={isFocus} 
                onPress={onFocus} 
                designer={designer} 
                variant={variant} 
                color={color} 
                fullWidth={fullWidth} 
                margin={margin} 
                width={width} 
                error={error}
            >
                <LabelTextField top={top} fontSize={size}>{label}</LabelTextField>
                <ContainerTextField>
                    {leftIcon && (
                        <TextFieldIcon>
                        {leftIcon}
                        </TextFieldIcon>
                    )}
                    <TextInput {...props} ref={input} onBlur={handleBlurInput} onFocus={handleFocusInput} onChangeText={handleChangeText} style={{padding: 0, margin: 0, fontSize: 14, fontWeight: 600 }} cursorColor="black" />
                    {rightIcon && (
                        <TextFieldIcon>
                        {leftIcon}
                        </TextFieldIcon>
                    )}
                </ContainerTextField>
            </WhapperTextField>
            {error && (
                <LabelHelperText>
                    {error ? helperText : ""}
                </LabelHelperText>
            )}
        </ComponentTextField>
    );
}