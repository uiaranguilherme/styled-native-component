import { Animated, Easing, NativeSyntheticEvent, TextInput, TextInputFocusEventData } from "react-native";
import { TextFieldProps } from "../index.d";
import { WhapperTextField, ContainerTextField, LabelTextField, LabelHelperText, TextFieldIcon } from "./styles";
import { useEffect, useRef, useState } from "react";

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

    const handleFocusInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(true);
        animateFocus();
        if(props.onFocus) props.onFocus(event);
    };

    const handleBlurInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(false);
        animateBlur();
        if(props.onBlur) props.onBlur(event);
    };  
    
    const handleFocusWhapper = () => {
        setFocus(true);
        animateFocus();
        input.current?.focus();
    };

    useEffect(() => {
        const topListenerId = topPosition.addListener(({ value }) => setTop(value));
        const fontSizeListenerId = fontSize.addListener(({ value }) => setSize(value));

        return () => {
            topPosition.removeListener(topListenerId);
            fontSize.removeListener(fontSizeListenerId);
        }
    }, [])
    

    return(
        <WhapperTextField focus={isFocus} onPress={handleFocusWhapper} designer={designer} variant={variant} color={color} fullWidth={fullWidth} margin={margin} width={width}>
            <LabelTextField top={top} fontSize={size}>{label}</LabelTextField>
                {leftIcon && (
                    <TextFieldIcon>
                       {leftIcon}
                    </TextFieldIcon>
                )}
            <ContainerTextField>
                <TextInput ref={input} onBlur={handleBlurInput} onFocus={handleFocusInput} style={{padding: 0, margin: 0, fontSize: 14, fontWeight: 600 }} cursorColor="black" {...props} />
            </ContainerTextField>
                {rightIcon && (
                    <TextFieldIcon>
                       {leftIcon}
                    </TextFieldIcon>
                )}
            {helperText && (
                <LabelHelperText>
                    {error ? helperText : ""}
                </LabelHelperText>
            )}
        </WhapperTextField>
    );
}