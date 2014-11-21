class RemoveInfoRepetidaPages < ActiveRecord::Migration
  def change
  	remove_column :pages, :name
  	remove_column :pages, :info
  	remove_column :pages, :page
  end
end
