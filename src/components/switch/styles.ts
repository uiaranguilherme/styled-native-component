import { styled } from "@/lib/styled";
import { darken, lighten } from "@/lib/styled/utils";
import { SwitchProps } from "../index.d";
import { PressableProps, ViewStyle } from "react-native";

const sizes = {
    "small": {
        maxTranslateX: 120,
        container: {
            height: 12,
            width: 40,
        },
        dot: {
            height: 20,
            width: 20
        }
    },
    "medium": {
        maxTranslateX: 120,
        container: {
            height: 15,
            width: 45,
        },
        dot: {
            height: 22,
            width: 22
        }
    },
    "large": {
        maxTranslateX: 120,
        container: {
            height: 18,
            width: 50,
        },
        dot: {
            height: 24,
            width: 24
        }
    },
}

export const WhapperSwitch = styled("view")<{ direction: ViewStyle["flexDirection"] }>(({ direction }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: direction
}));

export const ComponentSwitch = styled("view")({
    marginHorizontal: 10
});

export const ContainerSwitch = styled("pressable")<{ size: SwitchProps["size"], disabled: PressableProps["disabled"] }>(({ theme, size, disabled }) => ({
    height: sizes[size].container.height,
    width: sizes[size].container.width,
    marginVertical: 5,
    borderRadius: 10,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...(disabled ? {
        backgroundColor: darken(theme.palette.background.main, 10),
    } : {
        backgroundColor: lighten(theme.palette.primary.main, 85),
    })
}));

export const DotSwitch = styled("view")<{ translateX: number, size: SwitchProps["size"], disabled: PressableProps["disabled"] }>(({ theme, translateX, size, disabled }) => ({
    borderRadius: "50%",
    position: "absolute",
    transform: [{ translateX: `${translateX}%` }],
    borderWidth: 2,
    height: sizes[size].dot.height,
    width: sizes[size].dot.width,
    ...(translateX > 0 && translateX <= sizes[size].maxTranslateX ? 
        { borderColor: lighten(theme.palette.primary.main, 60) } :
        { borderColor: "transparent" }
    ),
    ...(disabled ? {
        backgroundColor: darken(theme.palette.background.main, 40),
    } : {
        backgroundColor: theme.palette.primary.main,
    })
}));

export const LabelSwitch = styled("text")(() => ({

}));