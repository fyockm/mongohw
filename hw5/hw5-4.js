use test;
db.zips.aggregate(
  { $project: 
    { first_char: { $substr: ["$city",0,1]}, pop: "$pop"}	 
  },
  { $match:
    { first_char: { $lte: "9" }}
  },
  { $group:
    { _id: "rural", rpop: { $sum: "$pop" }}
  }
);