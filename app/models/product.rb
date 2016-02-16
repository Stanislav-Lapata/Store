class Product < ActiveRecord::Base
  has_many :images, dependent: :destroy
  belongs_to :category

  validates :name, :description, :price, presence: true
  validates :name, uniqueness: true, length: { minimum: 2, maximum: 50 }
  validates :price, numericality: { greater_than_or_equal_to: 0.01 }
end
