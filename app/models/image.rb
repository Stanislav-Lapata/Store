class Image < ActiveRecord::Base
  belongs_to :product
  mount_uploader :name, ImageUploader
end
