class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else 
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy 
    @user = current_user
    if @user 
      logout 
      render json: {}
    else
      render json: {}, status: 404
    end
  end
    
end


# render calls your user show view to retrieve data from db and store within state for us to access
# render stores the custom error message into an array within state for us to access