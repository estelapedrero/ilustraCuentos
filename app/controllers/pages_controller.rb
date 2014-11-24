class PagesController < ApplicationController
	def create
		@book = Book.find(params[:book_id])
		@page = @book.pages.create page_params
		redirect_to books_path
	end

		private	
	def page_params
		params.require(:page).permit(:content)
	end
end
