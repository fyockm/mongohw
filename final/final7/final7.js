use photosharing;
db.images.find().forEach(function(image) {
  if (!db.albums.count({"images": image._id})) db.images.remove({"_id": image._id});
});

db.albums.aggregate(
  { $unwind: "$images" },
  { $group: { _id: null,
              sum: { $sum: "$images" },
              count: { $sum: 1 }}}
);

db.images.find({ "tags": "kittens" }).count();
