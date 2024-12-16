import { ImageProps, TextProps, ViewProps, PressableProps, ScrollViewProps } from "react-native";
import { ReactNode } from "react"

export interface IScrollView extends ScrollViewProps {}
export interface ITextProps extends TextProps {}
export interface IViewProps extends ViewProps {}
export interface IImageProps extends ImageProps {}
export interface IPressableProps extends PressableProps {
    children?: ReactNode
}
