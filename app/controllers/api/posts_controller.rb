# class Api::PostsController < ApplicationController
# # /api/users/:user_id/stores/:store_id/posts/:id

#   def index
#     @posts = Store.find(params[:store_id]).posts
#     render json: @posts
#   end

#   def show
#     @post = Post.find(params[:id])
#     render json: @post
#   end

#   def create
#     @store = Store.find(params[:store_id])
#     @post = @store.posts.create(post_params)
#     render json: @post
#   end

#   def update
#     @post = Post.find(params[:id])
#     @post.update(post_params)
#     render json: @post
#   end

#   def destroy
#     @post = Post.find(params[:id]).destroy
#     render status: :ok
#   end

#   private

#   def post_params
#     params.require(:post).permit(:review, :image)
#   end
# end
