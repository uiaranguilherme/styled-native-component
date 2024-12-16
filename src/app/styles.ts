import { styled } from "@/lib/styled";
import { darken } from "@/lib/styled/utils";

export const WhapperHomePage = styled("scroll-view")(({ theme }) => ({
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: theme.palette.background.main
}));

export const WhapperSectionHomePage = styled("view")({
    display: "flex",
    width: "100%"
});

export const TitleMenu = styled("text")(({ theme }) => ({
    fontSize: 24,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 10
}));

export const WhapperImageCard = styled("view")({
    height: 150,
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
});

export const WhapperTitleCard = styled("view")(({ theme }) => ({
    borderStyle: "solid",
    borderColor:  darken(theme.palette.background.main, 8),
    borderTopWidth: 1,
    padding: 10
}));

export const TitleCard = styled("text")(({ theme }) => ({
    fontSize: 16,
    fontWeight: 500,
    //color: theme.palette.primary.main
}));