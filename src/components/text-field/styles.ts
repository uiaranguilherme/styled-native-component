import { styled } from "@/lib/styled";
import { TextFieldProps } from "../index.d";
import { darken } from "@/lib/styled/utils";

export const ComponentTextField = styled("view")({

});

export const WhapperTextField = styled("pressable")<Pick<TextFieldProps, "variant" | "designer" | "color" | "fullWidth" | "margin" | "width" | "error"> & { focus: boolean }>(({ variant, color, fullWidth, margin, width, focus, error, theme }) => ({
    ...(fullWidth && { 
        width : "100%" 
    }),
    ...(width && { 
        width : width
    }),
    ...(margin && {
        marginLeft: margin.l ? margin.l : 0,
        marginRight: margin.r ? margin.r : 0,
        marginBottom: margin.b ? margin.b : 0,
        marginTop: margin.t ? margin.t : 0
    }),
    ...(variant === "filled" && {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 45,
        position: "relative",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: focus ? theme.palette.primary.main : "transparent",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingTop: 2,
        paddingBottom: 4,
        ...(color === "tonal-background-offset" && {
            backgroundColor: darken(theme.palette.background.main, 5)
        }),
        ...(color === "primary" && {}),
        ...(color === "secundary" && {}),
        ...(color !== "secundary" && color !== "primary" && color !== "tonal-background-offset" && {
            backgroundColor: color
        }),
    }),
    ...(variant === "outlined" && {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 45,
        position: "relative",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: focus ? theme.palette.primary.main : darken(theme.palette.background.main, 1),
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingTop: 2,
        paddingBottom: 4,
        backgroundColor: "transparent"
    }),
    ...(variant === "standard" && {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 45,
        position: "relative",
        borderBottomWidth: 2,
        borderColor: focus ? theme.palette.primary.main : darken(theme.palette.background.main, 1),
        paddingHorizontal: 8,
        paddingTop: 2,
        paddingBottom: 4,
        backgroundColor: "transparent"
    }),
    ...(error && {
        borderColor: theme.palette.error.main,
        borderWidth: 2
    })
}));

export const ContainerTextField = styled("view")({

});

export const LabelTextField = styled("text")<{fontSize: number, top: number}>(({ top, fontSize, theme }) => ({
    color: darken(theme.palette.background.main, 60),
    fontWeight: 500,
    position: "absolute",
    top: top,
    left: 8,
    fontSize: fontSize

}));

export const LabelHelperText = styled("text")(({ theme }) => ({
    color: theme.palette.error.main
}));

export const TextFieldIcon = styled("view")({

});