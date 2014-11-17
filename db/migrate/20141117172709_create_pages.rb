class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
    	t.text :name
    	t.text :info
    	t.integer :page
      t.timestamps
    end
  end
end
