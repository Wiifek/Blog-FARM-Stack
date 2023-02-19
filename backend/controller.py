from model import Blog
from bson.objectid import ObjectId
from database import collection

async def fetch_one_blog(id):
    document = await collection.find_one({"_id": ObjectId(id)})
    return document

async def fetch_all_blogs():
    blogs = []
    cursor = collection.find({})
    async for document in cursor:
        blogs.append(Blog(**document))
    return blogs

async def create_blog(blog):
    document = blog
    result = await collection.insert_one(document)
    return document

async def update_blog(id, title, content, upvote, downvote):
    await collection.update_one({"_id":ObjectId(id)}, {"$set": {"content": content, "title": title, "upvotes": upvote, "downvotes": downvote}})
    document = await collection.find_one({"_id": ObjectId(id)})
    return document

async def remove_blog(id):
    document = await collection.find_one({"_id": ObjectId(id)})
    if document:
        await collection.delete_one({"_id": ObjectId(id)})
        return True
    return False