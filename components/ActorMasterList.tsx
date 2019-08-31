import React from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Text,
} from 'react-native';
import Actors from '../src/data/masterData/actor/Actors';

interface IProps {
	actors: Actors
}

export default (props: IProps) => {
	return (
		<FlatList
			style={styles.list}
			data={props.actors}
			keyExtractor={(_, index) => index.toString()}
			renderItem = {({ item }) =>
				<View style={ styles.listViewItem }>
					<Text>left: </Text>
					<Text style={styles.listViewItemText}>
						{item.id} {item.name}
					</Text>
					<Text> :right</Text>
				</View>
			}
		/>
	)
}

const styles = StyleSheet.create({

	list: {
		// width : '100%',
	},

	listViewItem: {
		flexDirection: 'row',
		flex: 1,

		padding: 10,
		margin: 5,
		
		backgroundColor: '#fcf',
		borderRadius: 5,
		// overflow: 'hidden',
	},

	listViewItemText: {
		flex: 10
	},
})