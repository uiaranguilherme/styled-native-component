import { Animated, Easing, GestureResponderEvent, LayoutChangeEvent } from "react-native"
import { ButtonProps } from "../index.d";
import { WhapperButton, ButtonIcon, LabelButton } from "./styles";
import { useTheme } from "@/lib/styled/hooks";
import { useState } from "react";
import { contrastText, lighten } from "@/lib/styled/utils";
import { useCallFunction } from "@/src/hooks";


export default ({ variant ,...props}: ButtonProps) => {
    const { palette } = useTheme();
    const [sizeDot] = useState(new Animated.Value(10));
    const [opacityDot] = useState(new Animated.Value(0));

    const [dot, setDot] = useState({
        inAnimation: true,
        vertical: 0,
        horizont: 0,
        display: "none"
    });
  
    const startAnimation = (event: GestureResponderEvent) => {
        sizeDot.setValue(1);
        opacityDot.setValue(1);
        var position = event.nativeEvent.changedTouches[0]; 
        setDot(state => ({...state, vertical: position.locationY - 5, horizont: position.locationX  - 5, inAnimation: true, display: "flex"}));
        
        Animated.spring(sizeDot, {
            speed: 0,
            toValue: 100,
            useNativeDriver: false
        }).start();
    };
    
    const finishAnimation = () => {
        Animated.timing(opacityDot, {
            duration: 300,
            toValue: 0,
            useNativeDriver: false
        }).start();

        opacityDot.addListener(({ value }) => value === 0 && setDot(state => ({...state, display: "none"})));
    }
    
    const handlePressIn = typeof props.onPressIn === "function" ? useCallFunction(startAnimation, props.onPressIn) : startAnimation;
    const handlePressOut = typeof props.onPressOut === "function" ? useCallFunction(finishAnimation, props.onPressOut) : finishAnimation;

    return(
        
        <WhapperButton {...props} variant={variant} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            {dot.inAnimation && (
                <Animated.View style={{
                    display: dot.display,
                    position: "absolute", 
                    top: dot.vertical, 
                    left: dot.horizont,
                    transform: [{ scale: sizeDot }],
                    height: 10,
                    width: 10,
                    opacity: opacityDot,
                    backgroundColor: lighten(palette.primary.main, 40),
                    borderRadius: "50%"
                }}/>
            )}
            {props.leftIcon && (
                <ButtonIcon isEnd={false}>
                    {props.leftIcon}
                </ButtonIcon>
            )}
            <LabelButton variant={variant} color={contrastText(palette.primary.main)}>{props.children}</LabelButton>
            {props.rightIcon && (
                <ButtonIcon isEnd={true}>
                    {props.rightIcon}
                </ButtonIcon>
            )}
        </WhapperButton>
    );
}