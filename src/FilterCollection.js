export default class FilterCollection{
	constructor(){
		const collection = [
			{"id":"1",
			 "name":"summary_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:summary:"},
			{"id":"2",
			 "name":"created_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:created:"},
			{"id":"3",
			 "name":"location_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:location:"}
		];
		this.collection = collection
	}

	values(key){
		var values = [];
		this.collection.map(hash => {
			values.push(hash[key]);
		});
		return values;


	}
}