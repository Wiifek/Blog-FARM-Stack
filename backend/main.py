from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Blog
#App object
app = FastAPI()

from controller import (
    fetch_one_blog,
    fetch_all_blogs,
    create_blog,
    update_blog,
    remove_blog
)

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def read_root():
    return {"Welcome to Blog"}

@app.get("/api/blogs")
async def get_todo():
    response = await fetch_all_blogs()
    return response

@app.get("/api/blogs{id}", response_model=Blog)
async def get_blog_by_id(id):
    response = await fetch_one_blog(id)
    if response:
        return response
    raise HTTPException(404, f"There is no blog with this id {id}")

@app.post("/api/blogs", response_model=Blog)
async def post_blog(blog: Blog):
    response = await create_blog(blog.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad request")

@app.put("/api/blogs{id}/",response_model=Blog)
async def put_blog(id: str, title: str, content: str, upvotes: int, downvotes: int):
    response = await update_blog(id,title, content, upvotes, downvotes)
    if response:
        return response
    raise HTTPException(404, f"There is no blog with this id {id}")

@app.delete("/api/blogs{id}")
async def delete_blog(id):
    response = await remove_blog(id)
    if response:
        return "Successfully deleted blog !"
    raise HTTPException(404, f"There is no blog with this id {id}")
