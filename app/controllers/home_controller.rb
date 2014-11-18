class HomeController < ApplicationController
	def index
		if user_signed_in?
   		render 'user'
   	else 
   	  render 'login'
		end
	end

end
