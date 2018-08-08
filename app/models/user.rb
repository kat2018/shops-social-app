class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :stores, through: :posts
end
