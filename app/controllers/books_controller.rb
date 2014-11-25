class BooksController < ApplicationController
	def index
		@user = current_user
		@book = Book.all
	end
	
	def new
		@book = Book.new
	end

	def create
		@book = Book.new book_params
		if @book.save
			redirect_to edit_book_page_path(@book)
		else
			render 'new'
		end
	end

	def edit
		@book = Book.find(params[:id])
		@page = Page.new
	end

	def show
		@books = Book.all
		@book = Book.find(params[:id])
	end

	def destroy
    book = Book.destroy(params[:id])
    redirect_to books_path book.user
  end

		private	
	def book_params
		params.require(:book).permit(:title, :id)
	end
end
