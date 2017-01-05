class CommentsController < ApplicationController

	def create
	 @post = Post.find(params[:comment][:post_id])
	 @comment = Comment.create(comment_params)
	  if @comment.save
	  	render json: @post.as_json, status: :ok
	  else
			render json: {comment: @comment.errors, status: :no_content}
	  end
	end

	private
	def comment_params
		params.fetch(:comment,{}).permit(:description,:post_id)
	end
end
