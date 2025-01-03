import { styled } from "@/lib/styled";
import { ButtonProps } from "../index.d";
import { lighten } from "@/lib/styled/utils";

export const WhapperButton = styled("pressable")<Pick<ButtonProps, "variant" | "disabled">>(({ variant, disabled, theme }) => ({
    ...(variant === "container" && {
        padding: 15,
        borderRadius: 8,
        backgroundColor: theme.palette.primary.main
    }),
    ...(variant === "outlined" && {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
        padding: 15,
        borderRadius: 8,
        backgroundColor: lighten(theme.palette.primary.main, 90)
    }),
    ...(variant === "text" && {
        backgroundColor: lighten(theme.palette.primary.main, 90),
        padding: 15,
        borderRadius: 8,
    }),
    ...(disabled && {
        backgroundColor: lighten(theme.palette.primary.main, 95),
    }),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    position: "relative",
    overflow: "hidden",

}));

export const LabelButton = styled("text")<Pick<ButtonProps, "variant"> & { color: string }>(({ color, variant, theme }) => ({
    textAlign: "center",
    fontSize: 15,
    color: color,
    fontWeight: 500,
    ...(variant === "container" && {
        color: color,
    }),
    ...(variant === "outlined" && {
        color: theme.palette.primary.main,
    }),
    ...(variant === "text" && {
        color: theme.palette.primary.main,
    }),
}));

export const ButtonIcon = styled("view")<{isEnd: boolean}>(({ isEnd }) => ({
    ...(isEnd ? {
        marginLeft: 10
    } : {
        marginRight: 10
    }),
}));