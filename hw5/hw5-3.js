use test;
db.grades.aggregate(
  { $unwind: "$scores" },
  { $match:
    { "scores.type": { $ne: "quiz" }}},
  { $group:
    { _id: { student_id: "$student_id", class_id: "$class_id" },
      avgScore: { $avg: "$scores.score" }}},
  { $group:
    { _id: "$_id.class_id",
      avgClassScore: { $avg: "$avgScore" }}},
  { $sort: { avgClassScore: -1 }},
//  { $sort: { avgClassScore: 1 }},
  { $limit: 3 }
);
