class CommentsController < ApplicationController
    before_action :find_comment, only: [:destroy]
    before_action :authenticate_user!
    before_action :authorize_user!, only: [:destroy]

    def create
        @post = Post.find(params[:post_id])
        @comment = Comment.new(comment_params)
        @comment.post = @post

        @comment.user = current_user
        if @comment.save
            redirect_to(post_path(@post.id))
        else
            @comments = @post.comments.order(created_at: :desc)
            render("posts/show")
        end

        @comment.save
    end


    def destroy
        @comment.destroy
        redirect_to(post_path(@comment.post))
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end

    def find_comment
        @comment = Comment.find(params[:id])
    end

    def authorize_user!
        unless can?(:crud, @comment)
            flash[:danger] = "Access Denied!"
            redirect_to post_path()
        end
    end
end
