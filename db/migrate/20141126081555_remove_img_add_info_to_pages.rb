class RemoveImgAddInfoToPages < ActiveRecord::Migration
  def change
  	remove_column :pages, :img
 	  add_column :pages, :info, :text
 	end
end
