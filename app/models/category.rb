class Category < ActiveRecord::Base
  has_many :products

  validates :name, presence: true, uniqueness: true, length: { minimum: 2, maximum: 50 }
end
