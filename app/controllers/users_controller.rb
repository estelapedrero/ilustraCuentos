class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def create
  	@user=User.new(user_params)
  	if @user.save
  		flash[:success] = "Comienza la aventura!"
  	else
      flash[:error] = "El usuario no existe.¡Registrate!"
  		render 'registro'
  	end
  end

  def show
    redirect_to action: 'index', controller: 'users' unless @user = User.find(params[:id])
   	flash[:error] = "El usuario no existe.¡Registrate!"
    render 'user'
  end

  def update
    render 'edit'
  end
  
  private

  	def user_params
  		params.require(:user).permit(:name, :nickname, :password, :password_confirmation, :email)
  	end

end