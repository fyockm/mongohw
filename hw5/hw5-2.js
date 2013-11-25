use test;
db.zips.aggregate(
  { $match:
//    { state: { $in: [ 'CT', 'NJ' ] }}},
    { state: { $in: [ 'CA', 'NY' ] }}},
  { $group:
    { _id: { state: "$state", city: "$city" },
      pop: { $sum: "$pop" }}},
  { $match: 
    { pop: { $gt: 25000 }}},
  { $group:
    { _id: "combo",
      avgCityPop: { $avg: "$pop" }}}
);