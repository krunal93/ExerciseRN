/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { SliderRow } from './SliderRow';
import { connect } from 'react-redux';
import { setApisResponse,setRandomIndex } from '../redux/actions';
import { API } from '../const';

const axios = require('axios');

const styles = StyleSheet.create({
  listHorizontalSeparator: {
    width: 20,
  },

});
/**
 * This image slider is developed using flat list , just do pull to refresh to generate random images
 *
 * imageCount : how many images in slider need to show
 * setApisResponse : method for set list of images received from APIs.
 * setRandomIndex : method to store random images index
 */
function ImageList(props) {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get(API)
      .then(function (response) {
        props.setApisResponse(response.data || []);
        setRefresh(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    if (refresh && props.length > 0) {
      const first = Math.floor(Math.random() * (props.length - props.imageCount));
      const second = first + props.imageCount;
      props.setRandomIndex({first,second});
      setRefresh(false);
    }
  }, [refresh,props]);

  return (
    <View>
      <FlatList
        data={props.images}
        extraData={props.images.length}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        onRefresh={() => { setTimeout(() => setRefresh(true), 1000); }} // delaying 1 second for refreshing
        refreshing={refresh}
        ListHeaderComponent={() => <View style={styles.listHorizontalSeparator} />}
        ListFooterComponent={() => <View style={styles.listHorizontalSeparator} />}
        ItemSeparatorComponent={() => <View style={styles.listHorizontalSeparator} />}
        renderItem={({ item }) => <SliderRow id={item.id} author={item.author} />}
      />
    </View>
  );
}

const mapStateToProps = (state,ownProps)=>{
  const {images,first,second} = state;
  return {length:images.length,images:images.slice(first,second)};
};
const mapDispatchToProps = {
setApisResponse,setRandomIndex,
};
export default connect(mapStateToProps,mapDispatchToProps)(ImageList);
