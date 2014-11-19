class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def show
    redirect_to action: 'index', controller: 'users' unless @user = User.find(params[:id])
   	flash[:error] = "El usuario no existe.¡Registrate!"
    render 'user'
  end

end