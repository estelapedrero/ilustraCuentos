class PagesController < ApplicationController
	require 'json'
	def create
		@book = Book.find(params[:book_id])
		@page = @book.pages.create page_params
		if @page.save && params["commit"] == "+"
			redirect_to new_book_page_path(@book, @page)
		else
			redirect_to book_path(@book)
		end
	end

	def new
		@book = Book.find(params[:book_id])
		@page = @book.pages.create
		redirect_to edit_book_page_path(@book, @page)
	end


	def edit
			@book = Book.find(params[:book_id])
			@page = @book.pages.find(params[:id])

	end

	def show
			@book = Book.find(params[:book_id])
			@page = @book.pages
			render 'books/edit'

	end

	def update
		@book = Book.find(params[:book_id])
		@page = @book.pages.find(params[:id]).update_attributes page_params
		
		redirect_to book_path(@book)
	end

	def requireJSON
		source = 'books/pages'
		@info = JSON.parse(JSON.load(source));
	end

		private	
	def page_params
		params.require(:page).permit(:content, :info)
	end
end
