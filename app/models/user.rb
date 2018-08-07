class User < ApplicationRecord
    has_many :posts
    has_many :stores, through: :posts
end
