import { Image, Text } from "react-native"
import { TitleCard, TitleMenu, WhapperHomePage, WhapperImageCard, WhapperSectionHomePage, WhapperTitleCard } from "./styles";
import Card from "./components/card";

const menu = {
    input: {
        title: "Inputs",
        types: [
            {
                label: "Autocomplete",
                img: require("../assets/img/autocomplete.png"),
                url: ""
            },
            {
                label: "Button",
                img: require("../assets/img/button.png"),
                url: ""
            },
            {
                label: "Button Group",
                img: require("../assets/img/button-group.png"),
                url: ""
            },
            {
                label: "Checkbox",
                img: require("../assets/img/checkbox.png"),
                url: ""
            },
            {
                label: "Floating Action Button",
                img: require("../assets/img/fab.png"),
                url: ""
            },
            {
                label: "Radio Group",
                img: require("../assets/img/radio-group.png"),
                url: ""
            },
            {
                label: "Ratting",
                img: require("../assets/img/rating.png"),
                url: ""
            },
            {
                label: "Select",
                img: require("../assets/img/select.png"),
                url: ""
            },
            {
                label: "Slider",
                img: require("../assets/img/slider.png"),
                url: ""
            },
            {
                label: "Switch",
                img: require("../assets/img/switch.png"),
                url: ""
            },
            {
                label: "Text Field",
                img: require("../assets/img/text-field.png"),
                url: ""
            },
            {
                label: "Transfer List",
                img: require("../assets/img/transfer-list.png"),
                url: ""
            },
            {
                label: "Toggle Button",
                img: require("../assets/img/toggle-button.png"),
                url: ""
            },
        ]
    },
    dataDisplay: {
        title: "Data display",
        types: [
            {
                label: "Avatar",
                img: require("../assets/img/avatar.png"),
                url: ""
            },
            {
                label: "Badge",
                img: require("../assets/img/badge.png"),
                url: ""
            },
            {
                label: "Chip",
                img: require("../assets/img/chip.png"),
                url: ""
            },
            {
                label: "Divider",
                img: require("../assets/img/divider.png"),
                url: ""
            },
            {
                label: "List",
                img: require("../assets/img/list.png"),
                url: ""
            },
            {
                label: "Table",
                img: require("../assets/img/table.png"),
                url: ""
            },
            {
                label: "Tooltip",
                img: require("../assets/img/tooltip.png"),
                url: ""
            },
            {
                label: "Typograph",
                img: require("../assets/img/typography.png"),
                url: ""
            },
        ]
    },
    feedback: {
        title: "Feedback",
        types: [
            {
                label: "Alert",
                img: require("../assets/img/alert.png"),
                url: ""
            },
            {
                label: "Backdrop",
                img: require("../assets/img/backdrop.png"),
                url: ""
            },
            {
                label: "Dialog",
                img: require("../assets/img/dialog.png"),
                url: ""
            },
            {
                label: "Snackbar",
                img: require("../assets/img/snackbar.png"),
                url: ""
            }
        ]
    },
    surface: {
        title: "Surface",
        types: [
            {
                label: "Accordion",
                img: require("../assets/img/accordion.png"),
                url: ""
            },
            {
                label: "Card",
                img: require("../assets/img/card.png"),
                url: ""
            },
        ]
    },
    navigation: {
        title: "Navigation",
        types: [
            {
                label: "Drawer",
                img: require("../assets/img/drawer.png"),
                url: ""
            },
            {
                label: "Menu",
                img: require("../assets/img/menu.png"),
                url: ""
            },
            {
                label: "Pagination",
                img: require("../assets/img/pagination.png"),
                url: ""
            },
            {
                label: "Stepper",
                img: require("../assets/img/stepper.png"),
                url: ""
            },
            {
                label: "Tabs",
                img: require("../assets/img/tabs.png"),
                url: ""
            },
        ]
    }
} 

export default () => {
    return(
        <WhapperHomePage>
            {Object.keys(menu).map((menuKey, index) => {
                var menuItem = menu[menuKey];
                
                return(
                    <WhapperSectionHomePage key={index}>
                        <TitleMenu>{menuItem.title}</TitleMenu>
                        {menuItem.types.map((type, index) => (
                            <Card color="light"  key={index}>
                                <WhapperImageCard>
                                    <Image style={{width: "100%", objectFit: "contain"}} source={type.img} />
                                </WhapperImageCard>
                                <WhapperTitleCard>
                                    <TitleCard>{type.label}</TitleCard>
                                </WhapperTitleCard>
                            </Card>
                        ))}
                    </WhapperSectionHomePage>
                );
            })}
        </WhapperHomePage>
    );
}