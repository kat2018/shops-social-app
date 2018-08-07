class User < ApplicationRecord::Base
    has_many :posts
    has_many :stores, though: :posts, :uniq => true
end
