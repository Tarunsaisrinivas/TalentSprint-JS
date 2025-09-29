## Mongodb

- To see databases

```js
show dbs
```

- To use the database

```js
use db_name
```

- To create collection

```js
db.createCollection("collection_name");
```

- To insert data

```js
db.collection_name.insertOne({
  brand: "iphone",
  price: 170000,
  model: "17 Pro",
});
```

- To see collection the command is

```js
db.collection_name.find({ key: "value" });
```

- To see first collection use

```js
db.collection_name.findOne();
```

- To count documents in the collection

```js
db.collection_name.countDocuments();
```

- To show only limited number of collections

```js
db.collection_name.find().limit(2);
```

- To skip some collections in middle

```js
db.collection_name.find().skip(2);
```

- Combination of limit and skip to make skip the collections and need to display with limit

```js
db.collection_name.find().skip(2).limit(2);
```

- To see the age less than 30 we use

```js
db.collection_name.find({ price: { $lte: 30 } });
```

- To see the age greater than 30 we use

```js
db.collection_name.find({ price: { $gte: 30 } });
```

- To sort the collections in ascending

```js
db.collection_name.find().sort({ age: 1 });
```

- To sort the collections in descending

```js
db.collection_name.find().sort({ age: -1 });
```

- To find the range between the age

```js
db.collection_name.find({ age: { $gt: 30, $lt: 20 } });
```

- Find documents where age is 30 OR name is "tarun" in 'collection_name' collection

```js
db.collection_name.find({ $or: [{ age: 30 }, { name: "Tarun" }] });
```

- To hide a field in collection

```js
db.collection_name.find({}, { name: 0, age: 0 });
```

- To see only a particular field in collection

```js
db.collection_name.find({}, { name: 1, age: 1 });
```

- To delete a particular object from a collection

```js
db.collection_name.deleteOne({ name: "Tarun" });
```

- To set a new field by updating in the collection

```js
db.collection_name.updateOne({ age: 20 }, { $set: { behaviour: "good" } });
```

- To set a new field by updating Many in the collection

```js
db.collection_name.updateMany({ age: 23 }, { $set: { behaviour: "bad" } });
```

- To set behaviour for everyone to good need to use as below

```js
db.collection_name.updateMany({}, { $set: { behaviour: "good" } });
```

- To increment the age in the collection need to use 

```js
db.collection_name.updateMany({}, { $inc: { age: 40 } }); // empty {} means for all the object
```

- 
