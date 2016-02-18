class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          # :omniauthable :confirmable
  include DeviseTokenAuth::Concerns::User

  validates :first_name, :last_name, presence: true
end
