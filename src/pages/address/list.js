import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    SafeAreaView
} from 'react-native';
import fa from '../../utils/fa'
import { Button } from 'antd-mobile-rn';
import { ListView } from "../../utils/publicViewModule";
import { AddressApi } from "../../config/api/address";
import { PublicStyles } from '../../utils/publicStyleModule';
import AddressCard from "../../components/address/card";

export default class AddressList extends Component {
    onAddressChecked(id) {
        fa.cache.set('address_checked_id', id)
        this.props.navigation.goBack()
    }

    onEdit(id) {
        this.props.navigation.navigate('UserAddressEdit', { id, updateListRow: this.updateListRow })
    }

    onAdd() {
        this.props.navigation.navigate('UserAddressAdd', { updateListRow: this.updateListRow })
    }

    // todo id
    updateListRow = (id) => {
        this.ListView.manuallyRefresh()
    }

    render() {
        return <View style={[PublicStyles.ViewMax]}>
            <ListView
                ref={e => this.ListView = e}
                api={AddressApi.list}
                keyExtractor={e => String(e.id)}
                renderItem={item => (
                    <AddressCard
                        name={item.truename}
                        phone={item.phone}
                        id={item.id}
                        address={item.combine_detail}
                        onEdit={(id) => {
                            this.onEdit(id)
                        }}
                        onAddressChecked={() => {
                            this.onAddressChecked(item.id)
                        }} />
                )}
                fetchParams={{ type_id }}
            />
            <SafeAreaView>
                <Button size="large" onClick={() => this.onAdd()}>+ 新建地址</Button>
            </SafeAreaView>
        </View>
    }
}
const styles = StyleSheet.create({})