db.posts.update({"permalink":"mxwnnnqaflufnqwlekfd"}, {$inc:{"comments.1.num_likes":1}})

postsCollection.update(new BasicDBObject("permalink", permalink),
                new BasicDBObject("$inc", new BasicDBObject("comments."+ordinal+".num_likes", 1)), false, false);