
import { TitleCard, TitleMenu, WhapperHomePage, WhapperImageCard, WhapperSectionHomePage, WhapperTitleCard } from "./styles";
import Card from "@/src/components/card";
import { useRouter } from "expo-router";
import { Image, Pressable, Text } from "react-native";

const menu = {
    input: {
        title: "Inputs",
        types: [
            {
                label: "Autocomplete",
                img: require("../../assets/img/autocomplete.png"),
                url: "/autocomplete"
            },
            {
                label: "Button",
                img: require("../../assets/img/button.png"),
                url: "/button"
            },
            {
                label: "Button Group",
                img: require("../../assets/img/button-group.png"),
                url: "/text-field"
            },
            {
                label: "Checkbox",
                img: require("../../assets/img/checkbox.png"),
                url: "/checkbox"
            },
            {
                label: "Floating Action Button",
                img: require("../../assets/img/fab.png"),
                url: "/text-field"
            },
            {
                label: "Radio Group",
                img: require("../../assets/img/radio-group.png"),
                url: "/text-field"
            },
            {
                label: "Ratting",
                img: require("../../assets/img/rating.png"),
                url: "/text-field"
            },
            {
                label: "Select",
                img: require("../../assets/img/select.png"),
                url: "/text-field"
            },
            {
                label: "Slider",
                img: require("../../assets/img/slider.png"),
                url: "/text-field"
            },
            {
                label: "Switch",
                img: require("../../assets/img/switch.png"),
                url: "/text-field"
            },
            {
                label: "Text Field",
                img: require("../../assets/img/text-field.png"),
                url: "/text-field"
            },
            {
                label: "Transfer List",
                img: require("../../assets/img/transfer-list.png"),
                url: "/text-field"
            },
            {
                label: "Toggle Button",
                img: require("../../assets/img/toggle-button.png"),
                url: "/text-field"
            },
        ]
    },
    dataDisplay: {
        title: "Data display",
        types: [
            {
                label: "Avatar",
                img: require("../../assets/img/avatar.png"),
                url: "/text-field"
            },
            {
                label: "Badge",
                img: require("../../assets/img/badge.png"),
                url: "/text-field"
            },
            {
                label: "Chip",
                img: require("../../assets/img/chip.png"),
                url: "/text-field"
            },
            {
                label: "Divider",
                img: require("../../assets/img/divider.png"),
                url: "/text-field"
            },
            {
                label: "List",
                img: require("../../assets/img/list.png"),
                url: "/text-field"
            },
            {
                label: "Table",
                img: require("../../assets/img/table.png"),
                url: "/text-field"
            },
            {
                label: "Tooltip",
                img: require("../../assets/img/tooltip.png"),
                url: "/text-field"
            },
            {
                label: "Typograph",
                img: require("../../assets/img/typography.png"),
                url: "/text-field"
            },
        ]
    },
    feedback: {
        title: "Feedback",
        types: [
            {
                label: "Alert",
                img: require("../../assets/img/alert.png"),
                url: "/text-field"
            },
            {
                label: "Backdrop",
                img: require("../../assets/img/backdrop.png"),
                url: "/text-field"
            },
            {
                label: "Dialog",
                img: require("../../assets/img/dialog.png"),
                url: "/text-field"
            },
            {
                label: "Snackbar",
                img: require("../../assets/img/snackbar.png"),
                url: "/text-field"
            }
        ]
    },
    surface: {
        title: "Surface",
        types: [
            {
                label: "Accordion",
                img: require("../../assets/img/accordion.png"),
                url: "/text-field"
            },
            {
                label: "Card",
                img: require("../../assets/img/card.png"),
                url: "/text-field"
            },
        ]
    },
    navigation: {
        title: "Navigation",
        types: [
            {
                label: "Drawer",
                img: require("../../assets/img/drawer.png"),
                url: "/text-field"
            },
            {
                label: "Menu",
                img: require("../../assets/img/menu.png"),
                url: "/text-field"
            },
            {
                label: "Pagination",
                img: require("../../assets/img/pagination.png"),
                url: "/text-field"
            },
            {
                label: "Stepper",
                img: require("../../assets/img/stepper.png"),
                url: "/text-field"
            },
            {
                label: "Tabs",
                img: require("../../assets/img/tabs.png"),
                url: "/text-field"
            },
        ]
    }
}

export default () => {
    const router = useRouter();
    return(
        <WhapperHomePage>
            {Object.keys(menu).map((menuKey, index) => {
                var menuItem = menu[menuKey];
                
                return(
                    <WhapperSectionHomePage key={index}>
                        <TitleMenu>{menuItem.title}</TitleMenu>
                        {menuItem.types.map((type, index) => {                            
                            return(
                                <Pressable onPress={() => router.navigate(type.url)} key={index}>
                                    <Card color="light">
                                        <WhapperImageCard>
                                            <Image style={{width: "100%", height: "100%", objectFit: "cover"}} source={type.img} />
                                        </WhapperImageCard>
                                        <WhapperTitleCard>
                                            <TitleCard>{type.label}</TitleCard>
                                        </WhapperTitleCard>
                                    </Card>
                                </Pressable>
                            )
                        })}
                    </WhapperSectionHomePage>
                );
            })}
        </WhapperHomePage>
    );
}