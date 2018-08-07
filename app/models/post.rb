class Post < ApplicationRecord::Base
      belongs_to :user
      belongs_to :store
end
