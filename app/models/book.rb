class Book < ActiveRecord::Base
	has_many :books
	belongs_to :user

	validates :title, presence: true, length: {maximum: 144, minimum:3}
end
