class AddFieldsToPages < ActiveRecord::Migration
  def change
  	    add_column :pages, :img, :string
  	    add_column :pages, :order, :integer
   	    add_column :pages, :content, :text
   	    add_column :pages, :book_id, :integer

  end
end
