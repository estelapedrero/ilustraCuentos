class BooksController < ApplicationController
	def index
	end
	def new
		@book = Book.new
	end
	def create
		@book = Book.new book_params
		if @book.save
			redirect_to edit_book_path(@book)
		else
			render 'new'
		end
	end

	def edit
		@book = Book.find(params[:id])
		@page = Page.new
	end

		private	
	def book_params
		params.require(:book).permit(:title)
	end
end
