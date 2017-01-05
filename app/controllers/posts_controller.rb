class PostsController < ApplicationController
	respond_to :html, :json
	before_action :set_post,only: [:update,:show,:destroy,:comment_show]


	def create
	  @post = Post.create(post_params)
	  if @post.save
	  	render json: @post.as_json, status: :ok
	  else
		render json: {user: @user.errors, status: :no_content}
	  end
	end

	def index
	 @post = Post.all
	 respond_with(@post) do |format|
	  format.json { render :json => @post.as_json }
	  format.html
	 end
	end

	def update
    if @post.update_attributes(post_params)
      render json: @post.as_json, status: :ok 
    else
      render json: {post: @post.errors, status: :unprocessable_entity}
    end
  end

  def comment_show
  	@comments = @post.comments
  	respond_with(@comments.as_json)
  end

  def comment_create
  	bidning.pry
  end

  def show
  	respond_with(@post.as_json)
  end

  def destroy
  	@post.destroy
    render json: {status: :ok}
  end

	private

	def post_params
		params.fetch(:post,{}).permit(:title)
	end

	def set_post
		@post = Post.find(params[:id])
		render json: {status: :not_found} unless @post
	end
end
