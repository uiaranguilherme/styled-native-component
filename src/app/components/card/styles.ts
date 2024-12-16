import { styled } from "@/lib/styled";
import { darken } from "@/lib/styled/utils";
import { CardProps } from "../index.d";

export const WhapperCard = styled("view")<CardProps>(({ theme, color, elevation, margin, padding }) => ({
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor:  darken(theme.palette.background.main, 8),
    marginBottom: 10,
    elevation: elevation,
    ...(color === "main" ? { backgroundColor: theme.palette.background.main } :
        color === "light" ? { backgroundColor: theme.palette.background.light } :
        color === "dark" ? { backgroundColor: theme.palette.background.dark } :
        { backgroundColor: color }
    ),
    ...(margin && margin.b && { marginEnd: margin.b }),
    ...(margin && margin.t && { marginTop: margin.t }),
    ...(margin && margin.l && { marginLeft: margin.l }),
    ...(margin && margin.r && { marginRight: margin.r }),
    ...(padding && padding.b && { paddingEnd: padding.b }),
    ...(padding && padding.t && { paddingTop: padding.t }),
    ...(padding && padding.l && { paddingLeft: padding.l }),
    ...(padding && padding.r && { paddingRight: padding.r })
}))