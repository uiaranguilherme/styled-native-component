import React from "react"
import { ScrollView } from "react-native"
import { IScrollView } from "./index.d"

export default (props: IScrollView) => {
    return <ScrollView {...props} />
}