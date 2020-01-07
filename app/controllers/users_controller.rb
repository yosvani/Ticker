class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show" #may need to update
    else
      render json: @user.errors.full_messages, status: 422
      #maybe render new?
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
