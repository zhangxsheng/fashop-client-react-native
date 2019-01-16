import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { PublicStyles } from '../../utils/style';
import { GoodsCollectApi } from "../../config/api/goodsCollect";
import { ListView } from "../../utils/view";
import GoodsItem from "../../components/goods/item";

export default class GoodsCollect extends Component {
    render() {
        const { navigation } = this.props
        return <View style={PublicStyles.ViewMax}>
            <ListView
                ref={e => this.ListView = e}
                keyExtractor={e => String(e.id)}
                api={GoodsCollectApi.list}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <GoodsItem
                        data={item}
                        index={index}
                        onPress={() => {
                            navigation.navigate("GoodsDetail", {
                                id: item.id
                            });
                        }}
                    />
                )}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    
})
