class PagesController < ApplicationController
	def create
		@book = Book.find(params[:book_id])
		@page = @book.pages.create page_params
		if params["commit"] == "+"
			redirect_to edit_book_page_path(@book, @page)

		else
			redirect_to books_path

		end
	end

	def edit
			@book = Book.find(params[:book_id])
			@page = @book.pages.find(params[:id])
			render 'books/edit'
	end

	def show
			@book = Book.find(params[:book_id])
			@page = @book.pages
			render 'books/edit'

	end

	def update
		@book = Book.find(params[:book_id])
		redirect_to books_path  
	end

		private	
	def page_params
		params.require(:page).permit(:content)
	end
end
