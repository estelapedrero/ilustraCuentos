class Book < ActiveRecord::Base
	has_many :pages
	belongs_to :user

	validates :title, presence: true, length: {maximum: 144, minimum:3}
end
