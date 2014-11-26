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
			@page = @book.pages.create
			redirect_to edit_book_page_path(@book, @page)
		else
			render 'new'
		end
	end

	def edit
		@book = Book.find(params[:book_id])
		@page = @book.pages.find(params[:id])
		render 'pages/edit'
	end

	def show
		@books = current_user.books.all
		@book = Book.find(params[:id])
		#@page = @book.pages.find(params[:id])

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
